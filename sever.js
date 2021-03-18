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
const Inventory_route = require("./api/Inventories_api/inventory_route");
const Item_route = require("./api/Items_api/Items_route");
const Monster_route = require("./api/Monster_api/monster_route");
const Skills_route = require("./api/Skills_api/skills_route");
const MonsterDrops_route = require("./api/Monster_drops_api/monsterDrops_route");
const Quests_route = require("./api/Quests_api/quests_route");
const Charskill_route = require("./api/Charskills_api/charskills_route");
const Questlogs_route = require("./api/Questlog_api/questlog_route");

server.use("/api/users", Users_route);
server.use("/api/class", BC_route);
server.use("/api/combats", Combat_route);
server.use("/api/anime", Anime_route);
server.use("/api/animeMessage", AnimeMessage_route);
server.use("/api/animeRatings", AnimeRatings_route);
server.use("/api/inv", Inventory_route);
server.use("/api/items", Item_route);
server.use("/api/monsters", Monster_route);
server.use("/api/skills", Skills_route);
server.use("/api/drops", MonsterDrops_route);
server.use("/api/quests", Quests_route);
server.use("/api/charskills", Charskill_route);
server.use("/api/questlogs", Questlogs_route);

server.get("/", (req, res) => {
  res.send({ Jarvis: "Ready to work sir." });
});

module.exports = server;
