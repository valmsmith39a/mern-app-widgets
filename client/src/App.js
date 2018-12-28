import React from 'react'
import {
  Route,
  Link
} from "react-router-dom";
import Widget from './components/Widget'
import Home from './components/Home'
import styled from 'styled-components'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar>
        <Link exact to="/"><StyledNavLink>Home</StyledNavLink></Link>
        <Link exact to="/widgets"><StyledNavLink>Widgets</StyledNavLink></Link>
      </Navbar>
      <Route exact path="/widgets" component={Widget}></Route>
      <Route exact path="/" component={Home}></Route>
    </div>
  );
}

export default App

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
`
const StyledNavLink = styled.div`
  color: white;
  margin: 15px;
`
