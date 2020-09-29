import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter,
	Switch,
	Route,
} from 'react-router-dom';
import State from './components/State';
import World from './components/World';
import India from './components/India';
import Header from './components/Header';

function App() {
	return (
    	<div className="container-fluid">   		
    		<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/">
						<India />
					</Route>
					<Route exact path="/india">
						<India />
					</Route>
					<Route path="/world">
						<World />
					</Route>
					<Route path="/state">
						<State />
					</Route>
				</Switch>
    		</BrowserRouter>
    	</div>
	);
}

export default App;
