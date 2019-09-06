const express = require("express");
const app = express();
const controller = require("./Controller");
const massive = require("massive");
require("dotenv").config();

app.use(express.json());

massive(process.env.CONNECTION_STRING)
	.then((dbInstance) => {
		app.set("db", dbInstance);
	})
	.catch((err) => console.log(err));

app.get("/api/houses", controller.getAllHouses);
app.post("/api/houses", controller.create);
app.delete("/api/house/:id", controller.deleteListing);

const port = 5050;
app.listen(port, () => {
	console.log(`dancing on port ${port}`);
});
