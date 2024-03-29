const express = require("express");
const route = express.Router();

const cohorteActionsCtrl = require("../controllers/cohorteController");
route.post("/", cohorteActionsCtrl.createCohorte);
route.get("/", cohorteActionsCtrl.getAllCohorte);

route.put("/:id", cohorteActionsCtrl.updateCohorte);
route.get("/:id", cohorteActionsCtrl.getCohorteId);
route.delete("/:id", cohorteActionsCtrl.deleteCohorte);

module.exports = route;
