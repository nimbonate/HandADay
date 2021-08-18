import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";

import withTracker from './components/misc/WithTracker';
import { Page404 } from "./components/misc/Page404";

// Pages
import Home from './components/pages/Home'
import About from './components/pages/About';
import Credits from './components/pages/Credits';
import Test from './components/pages/Test.js';
import ErrorBoundary from './components/misc/ErrorBoundary';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    component={
                        withTracker(() => (
                                <ErrorBoundary>
                                    <Home />
                                </ErrorBoundary>
                            )
                        )
                    } 
                />
                <Route 
                    exact 
                    path="/about" 
                    component={
                        withTracker(() => (
                                <ErrorBoundary>
                                    <About />
                                </ErrorBoundary>
                            )
                        )
                    } 
                />
                <Route 
                    exact 
                    path="/test" 
                    component={
                        withTracker(() => (
                                <ErrorBoundary>
                                    <Test />
                                </ErrorBoundary>
                            )
                        )
                    } 
                />
                <Route 
                    exact 
                    path="/credits" 
                    component={
                        withTracker(() => (
                                <ErrorBoundary>
                                    <Credits />
                                </ErrorBoundary>
                            )
                        )
                    } 
                />
                <Route component={withTracker(Page404)} />
            </Switch>
        )
    }
}

export default withRouter(Routes);