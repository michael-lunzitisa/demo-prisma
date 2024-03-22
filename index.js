const express = require("express");
const PORT = 3002;
const app = express();

app.get("/", (req, res) => {
    console.log("L'application fonctionne");
    res.send("L'application fonctionne");
});

app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});
