import React , { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return (nextProps.show !== this.props.show || nextProps.children !== this.props.children);
    }

    // componentDidUpdate(){
    //     console.log('[Modal.js] did update');
    // }

    render(){
        return(
            <React.Fragment>
            <Backdrop show = {this.props.show} clicked = {this.props.modalClosed}/>
            <div 
                className="Modal"
                style={{
                //    transform: this.props.show? 'translateY(0)' : 'translateY(-100vh)',
                   opacity: this.props.show? '1' : '0',
                   display: this.props.show? 'initial':'none'
                }}>
                <span className='Cross' onClick= {this.props.modalClosed}>X</span>
                {this.props.children}
            </div>
            </React.Fragment>)
    }
}


export default  Modal;