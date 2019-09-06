import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { HashRouter, Link } from "react-router-dom";
import Routes from "./route";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Header />
				<Routes />
				<Link to={Wizard}>Add new Property</Link>
				<div>
					<Link to={Dashboard}>Cancel</Link>
				</div>
			</div>
		</HashRouter>
	);
}

export default App;
