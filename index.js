const cors = require("cors");
const router = require("./src/routes/routes.js");
const express = require("express");
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    response.send("Hello world!")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})