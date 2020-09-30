import React from 'react';
import {HashRouter  as Router, Route, Switch} from 'react-router-dom';
import  Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                <>
                    {/* TODO: Login 상태면 Home Component */}
                    <Route exact path="/">
                        <Home />
                    </Route>
                </> 
                ) : (  
                    // TODO: NOT Login 상태면 Auth Component
                <Route exact path="/">
                    <Auth />
                </Route>
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter;