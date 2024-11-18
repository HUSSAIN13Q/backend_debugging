const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
require("./db/index");

//Db();

const app = express();

app.use(express.json());
const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);

app.use(cors);
app.use(morgan("dev"));

dotenv.config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
