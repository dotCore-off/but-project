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
import Mentionslegales from './pages/Mentionslegales';
import Pageenconstruction from './pages/Pageenconstruction';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Formation" component={Formation} />c
          <Route path="/Partenaires"component={Partenaires} />
          <Route path="/Poursuiteetudes"component={Poursuiteetudes} />
          <Route path="/Vieetudiante" component={Vieetudiante} />
          <Route path="/Mentionslegales" component={Mentionslegales} />
          <Route path="/Pageenconstruction" component={Pageenconstruction} />
          <Route path="/*" component={Notfound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
