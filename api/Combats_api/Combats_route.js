const exspress = require("express");
const route = exspress.Router();
const Db = require("./Combats_model");

route.get("/", (req, res) => {
  Db.all()
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
  body = { id: id, ...req.body };
  Db.add(body).then((ele) => {
    res.status(200).json({ Added: res.body });
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
