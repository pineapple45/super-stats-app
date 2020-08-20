import React, {Component } from 'react';
import SuperheroList from '../../components/SuperheroList/SuperheroList';
import Superhero from '../../components/SuperheroList/Superhero/Superhero';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import './Home.css';
require('dotenv').config();



class Home extends Component{

    state = {
        superheroData: null,
        superheroDetails: null,
        superheroLastId: 1,
        superheroName: '',
        showDetails: false
    }

    componentDidMount(){
        this.loadSuperheroList();
    }

    loadSuperheroList = () =>{
        if(this.state.superheroData !== null){
            this.setState({superheroData: null});
        }

        const API_KEY = process.env.REACT_APP_API_KEY;

        const promises = Promise.all([
            fetch(`https://www.superheroapi.com/api.php/${API_KEY}/${this.state.superheroLastId < 731? this.state.superheroLastId + 69: this.setState({superheroLastId: 1})}`),
            fetch(`https://www.superheroapi.com/api.php/${API_KEY}/${this.state.superheroLastId < 731? this.state.superheroLastId + 619: this.setState({superheroLastId: 1})}`),
            fetch(`https://www.superheroapi.com/api.php/${API_KEY}/${this.state.superheroLastId < 731? this.state.superheroLastId + 331: this.setState({superheroLastId: 1})}`),
            fetch(`https://www.superheroapi.com/api.php/${API_KEY}/${this.state.superheroLastId < 731? this.state.superheroLastId + 148: this.setState({superheroLastId: 1})}`),
            fetch(`https://www.superheroapi.com/api.php/${API_KEY}/${this.state.superheroLastId < 731? this.state.superheroLastId + 643: this.setState({superheroLastId: 1})}`),
          ]);

          promises.then((results) => 
                Promise.all(results.map(r => r.json()))
            )
            .then(results => {
                // console.log(results);
                this.setState(prevState => ({superheroData:results, superheroLastId: prevState.superheroLastId + 5}));
                // console.log(this.state.superheroLastId);
                window.scroll({
                    top:0,
                    left:0,
                    behavior:"smooth"
                })
            }).catch(err =>{
                console.log(err);
            })
    }

    inputHandler = (e) => {
        let name = e.target.value;
        this.setState({superheroName: name});
    }

    submitHandler = (e) => {
        e.preventDefault();

        this.setState({superheroData: null});

        const API_KEY = process.env.REACT_APP_API_KEY;

        const url = `https://www.superheroapi.com/api.php/${API_KEY}/search/${this.state.superheroName}`;
        fetch(url).then(response =>{
            response.json().then(data =>{
                // console.log(data.results)
                this.setState({superheroData: data.results , superheroLastId: 1,superheroName: ""});
            }).catch(err =>{
                console.log(err);
            })
        }).catch(err =>{
            console.log(err);
        })
    }

    cardClickHandler = (e) => {

        for(let i = 0; i<this.state.superheroData.length; i++){
            if(this.state.superheroData[i].id === e.target.id){
             this.setState({superheroDetails: this.state.superheroData[i], showDetails:true});           
            }
        }

        window.scroll({
            top:0,
            left:0,
            behavior:"smooth"
        })
        // console.log(this.state.superheroData[e.target.id-1]);
        // this.setState({superheroDetails: this.state.superheroData[e.target.id-1]});
    }

    modalCloseHandler = () => {
        this.setState({superheroDetails:null, showDetails:false});
    }

    render(){
        let superheroList = "";
        let superhero = "";
        if(this.state.superheroData === undefined){
            superheroList = <h1 style={{color:'white', backgroundColor:"rgba(0,0,0,0.5)"}}>Superhero data not present!</h1>
        }
        else if(this.state.superheroData !== null ){
            superheroList = <SuperheroList superheroData = {this.state.superheroData} cardClick = {this.cardClickHandler}/>
        }

        if(this.state.superheroDetails !== null){
            superhero = <Superhero details={this.state.superheroDetails}/>
        }

        return(
            <React.Fragment>
            <div className={'Home'}>
                <h1><a href="https://superheroapi.com/">SuperHero-Finder</a></h1>
                <form>
                    <input onChange={(e) => this.inputHandler(e)} value={this.state.superheroName} id='superhero-name' name='superhero-name' placeholder='Enter Superhero Name' autoComplete="off"/>
                    <button type='submit' onClick={(e) => this.submitHandler(e)}>Go</button>
                </form>
                {superheroList}
            </div>
            {/* <button onClick={this.loadSuperheroList} className="LoadButton">Load New</button> */}
             <span className="load">Click To Load More</span>
            <Button clicked={this.loadSuperheroList} loading={this.state.superheroData === null? true:false}/>
           
            <br/>
            <Modal show={this.state.showDetails} modalClosed={this.modalCloseHandler}>
                    {superhero}
            </Modal>
            {/* {this.state.superheroDetails === null ? <h1>Loading details...</h1> : <Superhero details={this.state.superheroDetails}/>} */}
            </React.Fragment>
        )
    }
}



export default Home;