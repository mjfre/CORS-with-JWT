import React, { Component } from 'react';
import LoginView from './LoginView'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import AdminView from './AdminView'
import AuthenticatedRoute from './../components/login/AuthenticatedRoute';
//import { createBrowserHistory } from 'history';

//const history = createBrowserHistory();

class SurveySchedulerFrontendApp extends Component {

    render() {
        return (
            <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
                height:'100%',
                backgroundImage: 'linear-gradient(45deg, #e3e3e3 33.33%, #d9d9d9 33.33%, #d9d9d9 50%, #e3e3e3 50%, #e3e3e3 83.33%, #d9d9d9 83.33%, #d9d9d9 100%)',
                backgroundSize: '21.21px 21.21px',
            }}>
                {/* <Router history={history}></div> */}
                <Router>
                    <>
                        <Switch>
                            <Route path="/login" exact component={LoginView} />
                            <AuthenticatedRoute path="/admin" exact component={AdminView} />
                        </Switch>
                    </>
                </Router>
            </div>
        )
    }
}

export default SurveySchedulerFrontendApp