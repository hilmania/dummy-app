const os = require('os');
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let shouldError = false;
setTimeout(() => (shouldError = true), 30000);

app
    .get("/", (req, res) => {
        if (shouldError) return res.sendStatus(500);
        res.send({ hostname: os.hostname() });
    });
    

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
