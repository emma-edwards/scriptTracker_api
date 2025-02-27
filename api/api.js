const express = require('express');

const app = express();

const PORT = process.env.PORT || 443

app.use(express.json());

app.get("/script-tracker/api/health", (request, response) => {
    const status = {
        "Status": "Healthy"
    }

    response.send(status);
});

app.use("/script-tracker/api/medications", require('./routes/medicationRouter'));

app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
})

module.exports = app;