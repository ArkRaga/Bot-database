const exspress = require("express");
const route = exspress.Router();
const Db = require("./questlog_model");

route.get("/all", (req, res) => {
  Db.all()
    .then((cols) => {
      res.status(200).json(cols);
    })
    .catch((err) => {
      res.status(500).json({ ERROR: "could not get the things" });
      console.log(err);
    });
});

route.get("/:id", (req, res) => {
  Db.getById(req.params.id)
    .then((cols) => {
      res.status(200).json(cols);
    })
    .catch((err) => {
      res.status(500).json({ ERROR: "could not get the things" });
      console.log(err);
    });
});

route.post("/add/:id", (req, res) => {
  console.log(req.body);
  id = req.params.id;
  // body = { discordId: id, ...req.body };
  req.body.discordId = id;
  body = req.body;
  console.log("Body: ", body);
  Db.add(body).then((ele) => {
    Db.getById(id).then((user) => {
      res.status(200).json({ "added user": user });
    });
  });
});

route.put("/put/:id", (req, res) => {
  id = req.params.id;
  body = { id: id, ...req.body };
  Db.update(id, body).then((ele) => {
    res.status(200).json({ bod: body });
  });
});

route.delete("/del/:id", (req, res) => {
  id = req.params.id;
  Db.del(id).then((ele) => {
    res.status(200).json({ "Deleted id": id });
  });
});

module.exports = route;
