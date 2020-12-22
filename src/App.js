//Import
//Modules & librairies

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Pages

import Home from './pages/Home';
import Notfound from './pages/Notfound.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
