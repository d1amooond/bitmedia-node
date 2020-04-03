// general modules

const express = require("express");
const cors = require("cors");
// routes

const getUsersRoute = require("./routes/getUsers");
const getUserRoute = require("./routes/getUser");

const PORT = 3001;

const app = express();
app.use(cors());

app.use(express.urlencoded({extended: true}));

app.use(getUsersRoute);
app.use(getUserRoute);
app.listen(PORT);