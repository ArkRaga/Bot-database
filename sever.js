const express = require("express");
const server = express();

server.use(express.json(), (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
const Users_route = require("./api/Users_Api/Users_route");
const BC_route = require("./api/Class_api/Class_route");
const Combat_route = require("./api/Combats_api/Combats_route");
const Anime_route = require("./api/Anime_api/Anime_route");
const AnimeMessage_route = require("./api/AnimeMessage_api/AnimeMessage_route");
const AnimeRatings_route = require("./api/AnimeRatings_api/AnimeRatings_route");

server.use("/api", Users_route);
server.use("/api/class", BC_route);
server.use("/api/combats", Combat_route);
server.use("/api/anime", Anime_route);
server.use("/api/animeMessage", AnimeMessage_route);
server.use("/api/animeRatings", AnimeRatings_route);

server.get("/", (req, res) => {
  res.send({ Jarvis: "Ready to work sir." });
});

module.exports = server;
