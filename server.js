const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");

env.config();
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect(process.env.MONGOURL, () => console.log("DB Connected"));

app.get("/", (req, res) => res.send("server ok"));
app.get("/api", (req, res) => res.send("Api ok"));
app.get("/api/v1", (req, res) => res.send("Api version 1"));
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/feeds", require("./routes/feeds"));
app.use("/api/v1/user", require("./routes/user"));
app.use("/api/v1/code", require("./routes/codes"));
app.use("/api/v1/runner", require("./routes/runner"));

app.listen(process.env.PORT, () => console.log("server ok"));
