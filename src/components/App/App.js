import React from 'react';
import logo from '../../logo.svg';
import { Route, Switch } from "react-router-dom";
import {Home} from "../Home";
import {BookForm} from "../Books/BookForm"
import {PageNotFound} from "../PageNotFound"
import { Book } from '../Books/Book';

import './App.css';

function App() {
  return (
   <div className="page-content-wrapper">
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={BookForm} />
          <Route component={PageNotFound} />
          <Route path="/edit/:slug" component={BookForm} />
          <Route path="/book/:slug" component={Book} />

        </Switch>
      </div>
    </div>
  );
}

export default App;
