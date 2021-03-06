import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./Components/Header/Navbar";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Article from "./Pages/Article";
import CreateArticle from "./Pages/CreateArticle";


function App() {
	
	return (
		<Router>
			<div className="App">
					<Navbar />
					
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/news">
							<News />
						</Route>
						<Route exact path="/news/:category">
							<News />
						</Route>
						<Route exact path="/news/:category/:article">
							<Article />
						</Route>
						<Route exact path="/investigations">
							<News />
						</Route>
						<Route exact path="/investigations/:category">
							<News />
						</Route>
						<Route exact path="/investigations/:category/:article">
							<Article />
						</Route>
						<Route exact path="/video">
							<News />
						</Route>
						<Route exact path="/video/:category">
							<News />
						</Route>
						<Route exact path="/video/:category/:article">
							<Article />
						</Route>
						<Route exact path="/special">
							<News />
						</Route>
						<Route exact path="/special/:category">
							<News />
						</Route>
						<Route exact path="/special/:category/:article">
							<Article />
						</Route>
						<Route exact path="/blog">
							<News />
						</Route>
						<Route exact path="/consultant">
							<News />
						</Route>
						<Route exact path="/consultant/:category">
							<News />
						</Route>
						<Route exact path="/consultant/:category/:article">
							<Article />
						</Route>

						<Route path="/recommended/:article">
							<Article />
						</Route>
						<Route path="/create-article">
							<CreateArticle />
						</Route>

						<Route path="/search/:query">
							<News />
						</Route>
					</Switch>
			</div>
		</Router>
	);
}

export default App;
