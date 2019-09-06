module.exports = {
	create: (req, res) => {
		const dbInstance = req.app.get("db");
		const { propertyName, address, city, state, zip } = req.body;
		dbInstance
			.create_listing([propertyName, address, city, state, zip])
			.then(() => res.sendStatus(200))
			.catch((err) => {
				res.status(500).send({ errorMessage: "listing unavailable" });
				console.log(err);
			});
	},
	getAllHouses: (req, res) => {
		const dbInstance = req.app.get("db");
		dbInstance.get_all().then((houses) => {
			res
				.status(200)
				.send(houses)
				.catch((err) => {
					res.status(500).send({
						errormessage: "listing unavailable"
					});
				});
		});
	},

	deleteListing: (req, res) => {
		const dbInstance = req.app.get("db");
		const { id } = req.params;

		dbInstance
			.delete_listing(id)
			.then(() => res.sendStatus(200))
			.catch((err) => {
				res.status(500).send({
					errorMessage: "listing unavailable"
				});
				console.log(err);
			});
	}
};
