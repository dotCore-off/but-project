//Import
//Modules & librairies

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Pages

import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Formation from './pages/Formation';
import Partenaires from './pages/Partenaires';
import Poursuiteetudes from './pages/Poursuiteetudes';
import Vieetudiante from './pages/Vieetudiante';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Formation" component={Formation} />
          <Route path="/Partenaires" component={Partenaires} />
          <Route path="/Poursuiteetudes" component={Poursuiteetudes} />
          <Route path="/Vieetudiante" component={Vieetudiante} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
