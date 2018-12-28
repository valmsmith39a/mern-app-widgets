import React from 'react'
import {
  Route,
  NavLink
} from "react-router-dom";
import Widget from './components/Widget'
import Home from './components/Home'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <ul>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/widgets">Widgets</NavLink>
      </ul>
      <Route exact path="/widgets" component={Widget}></Route>
      <Route exact path="/" component={Home}></Route>
    </div>
  );
}

export default App
