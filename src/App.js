import React , {Component} from 'react';
import Home from './containers/Home/Home';
import ErrorBoundry from './ErrorHandle/ErrorBoundry/ErrorBoundry';
import Alert from './components/audio';
import './App.css';

class App extends Component{
  render(){
    return(
      
      <ErrorBoundry>
        <Alert>
    <audio ref="audio_tag" src="../assets/batmanclassic.mp3" onLoadStart/>
    </Alert>
        <Home />
      </ErrorBoundry>
    )
  }
}
export default App;