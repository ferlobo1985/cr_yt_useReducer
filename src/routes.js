import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header';
import Home from './components/home';


const Routes = () => (
    <>
        <BrowserRouter>
            <Header/>
            <Container className="mt-3">
                <Switch>
                    <Route to="/" component={Home}/>
                </Switch>
            </Container>
        </BrowserRouter>

    </>
)

export default Routes;