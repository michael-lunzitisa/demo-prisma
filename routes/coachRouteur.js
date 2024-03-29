const express = require("express");
const route = express.Router();

const cohorteActionsCtrl = require("../controllers/coachController");
route.post("/", cohorteActionsCtrl.createCoach);
route.get("/", cohorteActionsCtrl.getAllCoach);

route.put("/:id", cohorteActionsCtrl.updateCoach);
route.get("/:id", cohorteActionsCtrl.getCoachId);
route.delete("/:id", cohorteActionsCtrl.deleteCoach);

module.exports = route;
