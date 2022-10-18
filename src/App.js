import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { Home } from "./routes/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
