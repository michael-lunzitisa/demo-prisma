const express = require("express");
const route = express.Router();

const machinectionsCtrl = require("../controllers/machineController");
route.post("/", machinectionsCtrl.createMachine);
route.get("/", machinectionsCtrl.getAllMachine);
route.put("/:id", machinectionsCtrl.updateMachine);
route.get("/:id", machinectionsCtrl.getMachineById);
route.delete("/:id", machinectionsCtrl.deleteMachine);

module.exports = route;
