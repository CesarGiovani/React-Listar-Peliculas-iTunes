import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Saludo } from './index';
import { Inicio } from './Inicio';
import { Pelicula } from "./Peliculas";
import { NoFound } from "./NoFound";
import { Menu } from "./Menu";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu></Menu>
          <Switch>
            <Route path='/' component={Inicio} exact />
            <Route path='/saludar' component={Saludo} >Saludar</Route>
            <Route path='/peliculas' component={Pelicula} />
            <Route component={NoFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
