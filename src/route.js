import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";

export default class Routes extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/" component={Dashboard} />
					<Route path="/Wizard" component={Wizard} />
				</Switch>
				<Dashboard />
				<Wizard />
			</div>
		);
	}
}
