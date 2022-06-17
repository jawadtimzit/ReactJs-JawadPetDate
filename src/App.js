import React from 'react';

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import Adminmanagement from './components/Adminmanagement';
import Home from './components/Home';
import Admincreatedog from './components/Admincreatedog'
import Adminupdatedog from './components/Adminupdatedog';
import Adminviewdogdetails from './components/Adminviewdogdetails';
import Adminlogin from './components/Login';
import Login from './components/Login';
import Customeralldoglist from './components/Customeralldoglist';
import Customerlistalldogs from './components/Customerlistalldogs';



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

          
          <Header/>  {/* render all the time in all the pages*/}
          
              <div>
              {/* Switch compoenent makes sure that only one componenet inside it shows*/}
              <Switch>
                  <Route path = "/" exact component ={Home}></Route> {/*route without components inside fragment */}
                  <Route path = "/login" component ={Login}></Route>  {/*route without components inside fragment */}
                  <Route path = "/listdogs" component ={Adminmanagement}></Route>
                  <Route path = "/addog" component ={Admincreatedog}></Route>
                  <Route path = "/updatedog/:id" component ={Adminupdatedog}></Route>
                  <Route path = "/viewdog/:id" component ={Adminviewdogdetails}></Route>
                  <Route path = "/customerlistdogs" component ={Customeralldoglist}></Route>
                  
              
              </Switch>
              </div>
             
            
                 {/*here you render component name render in main first page and do not render in routing other pages*/}
             
      </Router>  
    </div>
 
  );
}

export default App;
