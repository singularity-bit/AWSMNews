import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import {Navbar} from './Components/Header/Navbar';
import Home from './Components/Body/Home'




function App() {
  return (
    <Router>
      <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>
            
      </div>
    </Router>
    
  );
}

export default App;
