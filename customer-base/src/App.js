import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './App/pages/Home'
import Login from './App/pages/Login'
import Cadastro from './App/pages/Cadastro'
import Clientes from './App/pages/Clientes'
import NotFound from './App/pages/NotFound';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/login" component={ Login } />
          <Route path="/cadastro" component={ Cadastro } />
          <Route path="/clientes" component={ Clientes } />
          <Route path="*" component={ NotFound } exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

