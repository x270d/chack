import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import { Home } from './components/pages/Home';
import { MyJokes } from './components/pages/MyJokes';
import { NotFound } from './components/pages/NotFound';

function App() {

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/myjokes' exact component={MyJokes} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
