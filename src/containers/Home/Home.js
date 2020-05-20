import React, {Component} from 'react';
import SuperheroList from '../../components/SuperheroList/SuperheroList';
import './Home.css';

class Home extends Component{

    state = {
        superheroData: null,
        superheroLastId: 1,
    }

    componentDidMount(){
        const API_KEY = 610683779792139;
        const storageArray = [];
        
        
        // let url =  `https://www.superheroapi.com/api.php/${API_KEY}/search/${SUP_ID}`;

        const promises = Promise.all([
            fetch(`https://www.superheroapi.com/api.php/${API_KEY}/${this.state.superheroLastId}`),
            fetch(`https://www.superheroapi.com/api.php/${API_KEY}/${this.state.superheroLastId + 1}`),
            fetch(`https://www.superheroapi.com/api.php/${API_KEY}/${this.state.superheroLastId + 2}`),
            fetch(`https://www.superheroapi.com/api.php/${API_KEY}/${this.state.superheroLastId + 3}`),
            fetch(`https://www.superheroapi.com/api.php/${API_KEY}/${this.state.superheroLastId + 4}`),
          ]);

          promises
            .then((results) => 
                Promise.all(results.map(r => r.json()))
            )
            .then(results => {
                // console.log(results);
                this.setState(prevState => ({superheroData:results, superheroLastId: prevState.superheroLastId + 5}));
                // console.log(this.state.superheroLastId);
            })



        

        // fetch(url).then(response =>{
        //     response.json().then(data => {
        //         console.log(data);
        //     })
        //     .catch(err => console.log(err));
        // }).catch(err => console.log(err))

    }

    render(){
        // console.log(this.state.superheroData);
        let superheroList = <h1>Loading...</h1>
        if(this.state.superheroData !== null ){
            superheroList = <SuperheroList superheroData = {this.state.superheroData}/>
        }
        return(
            <div className={'Home'}>
                <h1>superhero API</h1>
                <form>
                    <input id='superhero-name' name='superhero-name' placeholder='Enter superhero name'/>
                    <button type='submit'>submit</button>
                </form>
                <p>Random search</p>
                {superheroList}
            </div>
        )
    }
}

export default Home;