const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

routerApi(app);

app.listen(port);

