import React, { Component } from "react";
import House from "../House/House";
import Axios from "axios";

export default class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			addHouses: [],
			houses: []
		};
	}
	addListing() {
		const { propertyName, address, city, state, zip } = this.state;
		const newListing = { propertyName, address, city, state, zip };

		Axios.get("http://localhost/3001/api/gethouses", newListing).then(
			(response) => {
				this.setState({
					addedlisting: "response"
				});
				console.log(response);
			}
		);
	}
	render() {
		// const mappedHouses = newListing.map((houses) => {
		// 	return( houses = {houses})
		// });

		return (
			<div>
				<div>Dashboard Component</div>
				<div></div>
				<House />
			</div>
		);
	}
}
