const eventSchema = require("../models/event");
const axios = require("axios");


async function addEvent(req, res) {
  const wallet = req.body.wallet; 
  const eventName = req.body.eventName; 
  const eventHash = req.body.eventHash; 
  const lastBlockNumber = Number(req.body.lastBlockNumber); 
  const contractAddress = req.body.contractAddress;

  const eventObj = {
    wallet,
    eventName,
    eventHash,
    lastBlockNumber,
    contractAddress,
  };

  const eo = eventSchema(eventObj);
  const eos = await eo.save();
  res.send(eos)
}

module.exports = {
  addEvent,
};
