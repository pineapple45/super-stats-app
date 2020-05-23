import React , {Component} from 'react';
import Home from './containers/Home/Home';
import ErrorBoundry from './ErrorHandle/ErrorBoundry/ErrorBoundry';
import './App.css';

class App extends Component{
  render(){
    return(
      <ErrorBoundry>
        <Home />
      </ErrorBoundry>
    )
  }
}
export default App;