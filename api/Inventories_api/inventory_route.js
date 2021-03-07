const exspress = require("express");
const route = exspress.Router();
const Db = require("./inventory_model");

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

route.get("/user/:id", (req, res) => {
  const id = req.params.id;

  Db.usersAll(id)
    .then((cols) => {
      res.status(200).json(cols);
    })
    .catch((err) => {
      res.status(500).json({ ERROR: "could not get the things" });
      console.log(err);
    });
});

route.get("/item", (req, res) => {
  Db.item(req.body)
    .then((cols) => {
      res.status(200).json(cols);
    })
    .catch((err) => {
      res.status(500).json({ ERROR: "could not get the things" });
      console.log(err);
    });
});

route.post("/add/:id", (req, res) => {
  id = req.params.id;
  body = { player_id: id, ...req.body };
  Db.add(body).then((ele) => {
    res.status(200).json({ Added: body });
  });
});

route.put("/item", (req, res) => {
  Db.update(req.body).then((ele) => {
    res.status(200).json({ bod: req.body });
  });
});

route.delete("/del/:id", (req, res) => {
  id = req.params.id;
  Db.del(id).then((ele) => {
    res.status(201).json({ "Deleted id": id });
  });
});

module.exports = route;
