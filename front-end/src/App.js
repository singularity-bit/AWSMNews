import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import {Navbar} from './Components/Header/Navbar';
import Home from './Pages/Home'
import News from './Pages/News';
import Article from './Pages/Article';
import CreateArticle from './Pages/CreateArticle';


function App() {
  return (
    <Router>
      <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path='/news' >
                <News/>
              </Route>
              <Route path='/news/:article'>
                <Article/>
              </Route>
              <Route path='/create-article'>
                <CreateArticle/>
              </Route>
            </Switch>
            
      </div>
    </Router>
    
  );
}

export default App;
