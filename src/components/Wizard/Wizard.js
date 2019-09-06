import React, { Component } from "react";

export default class Wizard extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			address: "",
			city: "",
			state: "",
			zipcode: ""
		};
	}
	//brought over from previous project.
	universalInput(property, value) {
		this.setState({
			[property]: value
		});
	}
	render() {
		const { name, address, city, state, zipcode } = this.state;
		return (
			<div>
				<div>Wizard Component</div>
				<input
					placeholder="Name"
					onChange={(event) => this.universalInput("name", event.target.value)}
					value={name}
				></input>
				<input
					placeholder="Address"
					onChange={(event) =>
						this.universalInput("address", event.target.value)
					}
					value={address}
				></input>
				<input
					placeholder="City"
					onChange={(event) => this.universalInput("city", event.target.value)}
					value={city}
				></input>
				<input
					placeholder="state"
					onChange={(event) => this.universalInput("state", event.target.value)}
					value={state}
				></input>
				<input
					placeholder="zipcode"
					onChange={(event) =>
						this.universalInput("zipcode", event.target.value)
					}
					value={zipcode}
				></input>
			</div>
		);
	}
}
