import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
  <Router> 
    <div className="app" > 
      {/*Navbar All Component*/}
     <Header/>

        <Switch>
              <Route path="/checkout" component={Checkout}>
                  <Checkout/>
              </Route>
              <Route path="/login">
                  <p>Login Welcome Sanny</p>
              </Route>
              <Route path="/" component={Home} exact> 
                   <Home/>
              </Route>
        </Switch>
        
    </div>
  </Router> 
  );
} 

export default App;
