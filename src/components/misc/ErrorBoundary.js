import React from 'react';
import {Link} from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    console.error("Uh oh! Error: " + error)
    console.error(JSON.stringify(errorInfo))
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
          <div style={{height: "100vh"}}>
            <div className="wrapper">
                <h2 className="no-margin md-padding-t">Something went wrong</h2>
                {/* TODO: details not supported in Edge */}
                <p>Sorry about this! Please <Link to="/about">contact us</Link> if the error persists.</p>
                <hr/>
                <p className="sm-text">  
                    <b>More info:</b>  
                    <br/>
                    {this.state.error && this.state.error.toString()}
                </p>
                <hr/>
                <div className="center-text sm-margin-t-b">
                    <Link to="/"><button className="md-blue-btn">Return to home page</button></Link>
                </div>
            
           
                
            </div>
          </div>
        
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
export default ErrorBoundary;