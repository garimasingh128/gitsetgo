import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Privacy from './components/Privacy';
import Profile from "./components/Profile";

export default function Routes () {
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact component={ Profile } />
          <Route path="/privacy-policy" component={ Privacy } />
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}