const exspress = require("express");
const route = exspress.Router();
const Db = require("./Class_model");

route.get("/", (req, res) => {
  Db.all().then((ele) => {
    res.status(200).json(ele);
  });
});
route.post("/:id", (req, res) => {
  id = req.params.id;
  body = { id: id, ...req.body };
  //needs to have id,col_id,des
  // console.log(body)
  Db.add(body).then((ele) => {
    res.status(200).json({ Added: res.body });
  });
});
route.put("/:id", (req, res) => {
  id = req.params.id;
  body = { id: id, ...req.body };
  Db.update(id, body).then((ele) => {
    res.status(200).json({ Updated: body });
  });
});

route.delete("/:id", (req, res) => {
  id = req.params.id;
  Db.del(id).then((ele) => {
    res.status(200).json({ "Deleted id": id });
  });
});

module.exports = route;
