const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");
const { boomErrorHandler, errorHandler } = require("./middlewares/error.handler");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

routerApi(app);

app.use(boomErrorHandler);

app.use(errorHandler);

app.listen(port);

