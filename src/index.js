import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Roster from './Roster';
import Frontpage from './Frontpage';
import Navbar from './Navbar';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <div>
    <Router>
      <Navbar />
        <Grid container justify="center">
        <Switch>
            <Grid item xs={6} className="main">
                <Route exact path='/' render={() => <Frontpage /> } />
                <Route exact path='/Roster' render={() => <Roster /> } />
            </Grid>
          </Switch>
        </Grid>
    </Router>
  </div>,
  document.getElementById('root')
);