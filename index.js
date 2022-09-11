const express = require("express");
const { getSightings } = require("./utils.js");
const cors = require("cors");
require("dotenv").config();

// console.log(process.env.PORT);
const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.get("/sightings", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings);
});

app.get("/sightings/:sightingIndex", async (req, res) => {
  const sightings = await getSightings();
  //console.log(req) --   params: { sightingIndex: '1' }
  res.json(sightings[req.params.sightingIndex]);
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
