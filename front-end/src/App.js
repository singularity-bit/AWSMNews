import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import {Navbar} from './Components/Header/Navbar';
import Home from './Pages/Home'
import News from './Pages/News';




function App() {
  return (
    <Router>
      <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path='/news'>
                <News/>
              </Route>
            </Switch>
            
      </div>
    </Router>
    
  );
}

export default App;
