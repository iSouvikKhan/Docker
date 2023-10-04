const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello fom docker" });
});

app.listen(9000, () => console.log("Server running at port 9000"));