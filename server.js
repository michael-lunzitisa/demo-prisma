const machineRouteUse = require("./routes/machine");
const cohorteRouteUse = require("./routes/cohorteRoute");
const coachRouteUse = require("./routes/coachRouteur");
const sessionRouteUse = require("./routes/sessionRoute");
const apprenantRouteUse = require("./routes/apprenantRoute");

const express = require("express");
const PORT = 3002;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/machine", machineRouteUse);
app.use("/cohorte", cohorteRouteUse);
app.use("/coach", coachRouteUse);
app.use("/session", sessionRouteUse);
app.use("/apprenant", apprenantRouteUse);

app.get("/", (req, res) => {
    return res.send("L'application fonctionne");
});

app.listen(PORT, () => console.log(`Le serveur écoute sur le port ${PORT}`));
