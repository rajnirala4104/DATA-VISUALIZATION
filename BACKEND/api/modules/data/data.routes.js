const { Router } = require("express");
const { dataController } = require("./data.controller");

const dataRouter = Router();
dataRouter.get("/", dataController.getAllTheData);
dataRouter.get("/search", dataController.searchData);
dataRouter.get("/distinctValues/:key", dataController.distinctValues);

module.exports = { dataRouter };
