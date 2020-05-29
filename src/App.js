import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css'
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
          <Navbar />
            <Switch>
             <Route path="/" component={Home}ß/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;