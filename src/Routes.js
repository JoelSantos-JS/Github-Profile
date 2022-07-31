import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/home';
import Repos from './pages/repos';
import followers from './pages/followers';
import following from './pages/following';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/repos" exact component={ Repos } />
            <Route path = "/followers" exact component={followers} />
            <Route path = "/following" exact component={following} />
        </Switch>
    </BRouter>
);

export default Routes;