const express = require("express");
const PORT = process.env.PORT || 3002;
const app = express();

app.get("/", (req, res) => {
    return res.send("L'application fonctionne");
});

app.listen(PORT, () => console.log(`Le serveur écoute sur le port ${PORT}`));
