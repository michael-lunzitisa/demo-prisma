const express = require("express");
const route = express.Router();

const apprenantActionsCtrl = require("../controllers/apprenantController");
route.post("/", apprenantActionsCtrl.createApprenant);
route.get("/", apprenantActionsCtrl.getAllApprenant);
route.put("/:id", apprenantActionsCtrl.updateApprenant);
route.get("/:id", apprenantActionsCtrl.getApprenantId);
route.delete("/:id", apprenantActionsCtrl.deleteApprenant);

module.exports = route;
