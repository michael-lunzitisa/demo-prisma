const express = require("express");
const route = express.Router();

const sessionActionsCtrl = require("../controllers/sessionController");
route.post("/", sessionActionsCtrl.createSession);
route.get("/", sessionActionsCtrl.getAllSession);

route.put("/:id", sessionActionsCtrl.updateSession);
route.get("/:id", sessionActionsCtrl.getSessionId);
route.delete("/:id", sessionActionsCtrl.deleteSession);

module.exports = route;
