import React , {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      //   logErrorToMyService(error, info);
      console.log(error,info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        // return <h1>Something went wrong.</h1>;
        return <div style={{textAlign:"center", backgroundColor:"#e8e4e1", fontFamily:"Sans-serif"}}>
            <h1 style={{color:"red"}}>Something went wrong.</h1>
            <p>Server might not be responding. Check console for more info.</p>
        </div>
      }
      return this.props.children;
    }
}

export default ErrorBoundary;
