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

route.post("/add", (req, res) => {
  console.log(req.body);
  body = req.body;
  console.log("Body: ", body);
  Db.add(body).then((ele) => {
    res.status(200).json({ "added quest": body.quests_id });
  });
});

route.put("/put/:id", (req, res) => {
  id = req.params.id;
  body = { id: id, ...req.body };
  Db.update(id, body).then((ele) => {
    res.status(200).json({ bod: body });
  });
});

route.delete("/del", (req, res) => {
  console.log("questlog-delete: ", req.body);
  Db.del(req.body).then((ele) => {
    res.status(200).json({ Deleted: req.body.quests_id });
  });
});

module.exports = route;
