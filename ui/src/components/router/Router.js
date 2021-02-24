import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Sidebar from '../base/Sidebar';
import Appbar from '../base/Appbar';

export function Router() {

    return (
        <BrowserRouter>
            <Appbar />
            <Sidebar />
            <Switch>
                <Route exact path="/">
                    <Container>
                    Dashboard
                    </Container>
                </Route>
                <Route exact path="/schedule">
                    <Container>
                    Schedule
                    </Container>
                </Route>
                <Route exact path="/groups">
                    <Container>
                    Groups
                    </Container>
                </Route>
                <Route exact path="/connect">
                    <Container>
                    Connect
                    </Container>
                </Route>
                <Route exact path="/create">
                    <Container>
                    Create
                    </Container>
                </Route>
                <Route exact path="/profile">
                    <Container>
                    Profile
                    </Container>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}




