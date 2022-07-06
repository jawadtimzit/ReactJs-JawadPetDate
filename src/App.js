import React from 'react';

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import Adminmanagement from './components/Adminmanagement';
import Admincreatedog from './components/Admincreatedog'
import Adminupdatedog from './components/Adminupdatedog';

import Login from './components/Login';

import Customerlistalldogs from './components/Customerlistalldogs';
import DogsHome from './components/DogsHome';
import Toylist from './components/Toylist';
import Footer from './components/Footer';
import Dogfiltering from './components/Dogfiltering';
import Contactdog from './components/Contactdog';
import Paypal from './components/Paypal';
import Routetopay from './components/Routetopay';

function App() {
  return (
    
    <div>
      <Router>
          {/* set link pages*/}
          
          <Link to="/"></Link>
          <Link to="/adminlogin"></Link>
          <Link to="/addog"></Link>
          <Link to ="/listdogs"></Link>
          <Link to = "/updatedog/:id"></Link>
          <Link to = "/viewdog/:id"></Link>
          <Link to = "/newhome"></Link>
          <Link to = "/toylist"></Link>
          <Link to = "/customerviewdog"></Link>
          <Link to = "/filtering"></Link>
          <link to ="/sendemail"></link>
          <link to ="/payamout"></link>
          
          <Header/>  {/* render all the time in all the pages*/}
              <div>
              {/* Switch compoenent makes sure that only one componenet inside it shows*/}
              <Switch>
                 {/* Admin features */}
                  <Route path = "/" exact component ={DogsHome}></Route> 
                  <Route path = "/login" component ={Login}></Route>  
                  <Route path = "/listdogs" component ={Adminmanagement}></Route>
                  <Route path = "/addog" component ={Admincreatedog}></Route>
                  <Route path = "/updatedog/:id" component ={Adminupdatedog}></Route>

                   {/* User features */}
                  <Route path = "/customerlistdogs" component ={Customerlistalldogs}></Route>
                  <Route path = "/filtering" component ={Dogfiltering}></Route>
                  <Route path = "/sendemail" component ={Contactdog}></Route>    
                  <Route path = "/toylist" component ={Toylist}></Route> 
                  <Route path = "/payamount" component ={Paypal}></Route> 
                  <Route path = "/routetopay" component ={Routetopay}></Route> 
              </Switch>
              </div>
            <Footer/> {/* render all the time in all the pages*/}    
      </Router>  
    </div>
 
  );
}

export default App;
