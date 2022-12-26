const express = require("express");
const mongoose = require("mongoose");
var path = require("path");
var cors = require("cors");
const app = express();
const router = express.Router();
const config = require("./config");
const bodyParser = require("body-parser");
let cron = require("node-cron");
const ethers = require("ethers");
const PushAPI = require("@pushprotocol/restapi");
const axios = require("axios");
const eventSchema = require("./src/models/event");
let port = config.port;
let uriMongo =
  "mongodb+srv://thunderpi:--Earth123--@thunderpi.rmgof.mongodb.net/push?retryWrites=true&w=majority";
const eventRoute = require("./src/routes/eventsRoute");
mongoose.connect(
  uriMongo,
  {
    //reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true,
    //useCreateIndex: true,
    //autoReconnect: true,
    useUnifiedTopology: true,
  },
  function (err, db) {
    if (err) {
      console.log("DB Connection errored");
      return;
    } else {
      console.log("DB Connected successfully");
    }
  }
);
app.use(cors());
app.use(express.json());
app.use("/event", eventRoute);
app.listen(port, () => {
  console.log("App running at port:" + port);
});
