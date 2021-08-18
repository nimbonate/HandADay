import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          year: new Date().getFullYear(),
          deviceWidth: 0,
          deviceHeight: 0
        };
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions = () => {
        this.setState({ deviceWidth: window.innerWidth, deviceHeight: window.innerHeight });
    }

    render() {
        return (
            <footer>
                <div className={this.state.deviceWidth >= 900 ? "f-container" : "hide"}>
                    <div className="left">
                        &nbsp;&nbsp;<Link to="/about">About</Link> | <Link to="/terms">Terms &amp; Conditions</Link> | <Link to="/credits">Credits</Link>&nbsp;&nbsp;
                    </div>

                    <div className="center">
                        {/* TODO: update social links */}
                        <div className="center-text">
                            <a href="https://www.linkedin.com/in/douglasrcjames" target="_blank" rel="noopener noreferrer" className="black">
                                <i className="fab fa-linkedin"/>
                            </a>
                            &nbsp;&nbsp;
                            <a href="https://www.github.com/douglasrcjames" target="_blank" rel="noopener noreferrer" className="black">
                                <i className="fab fa-github"/>
                            </a>
                            &nbsp;&nbsp;
                            <a href="https://twitter.com/douglasrcjames" target="_blank" rel="noopener noreferrer" className="black">
                                <i className="fab fa-twitter" />
                            </a>
                        </div>
                        &copy;
                        {' '}
                        {this.state.year}
                        {' '}
                        {/* TODO: update name */}
                        Doug's React Boiler
                    </div>

                    <div className="right">
                        <a href="https://www.douglasrcjames.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-tools"/> by douglasrcjames</a> 
                        &nbsp;&nbsp;
                    </div>
                </div>
                <div className={this.state.deviceWidth < 900 ? "f-container" : "hide"}>
                    <div>
                        {/* TODO: update social links */}
                        <a href="https://www.linkedin.com/in/douglasrcjames" target="_blank" rel="noopener noreferrer" className="black">
                            <i className="fab fa-linkedin"/>
                        </a>
                        &nbsp;&nbsp;
                        <a href="https://www.github.com/douglasrcjames" target="_blank" rel="noopener noreferrer" className="black">
                            <i className="fab fa-github"/>
                        </a>
                        &nbsp;&nbsp;
                        <a href="https://twitter.com/douglasrcjames" target="_blank" rel="noopener noreferrer" className="black">
                            <i className="fab fa-twitter" />
                        </a>
                    </div>
                    <div>
                        &copy;
                        {' '}
                        {this.state.year}
                        {' '}
                        {/* TODO: update name */}
                        Doug's React Boiler
                    </div>
                    <div>
                        <a href="https://www.douglasrcjames.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-tools"/> by douglasrcjames</a> 
                    </div>
                    <div className="sm-padding-b">
                        <Link to="/about">About</Link> | <Link to="/terms">Terms &amp; Conditions</Link> | <Link to="/credits">Credits</Link> 
                    </div>
                </div>
            </footer>
        )
    }
}
