import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import Home from './components/home/';
import Services from './components/services/';
import Contact from './components/contact/';
import NotFound from './components/404';

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
    </Switch>
);
