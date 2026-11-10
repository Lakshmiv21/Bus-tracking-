
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "RouteWise Backend is running!"
  });
});

app.get("/api/buses", (req, res) => {
  res.json([
    {
      busNumber: "101",
      name: "City Express",
      route: "Central Station to City Centre",
      arrival: "8 min",
      status: "On time",
      crowd: "Low"
    },
    {
      busNumber: "205",
      name: "Metro Link",
      route: "Central Station to Metro",
      arrival: "15 min",
      status: "Delayed",
      crowd: "Medium"
    }
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`RouteWise server running on port ${PORT}`);
});
