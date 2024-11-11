const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("usernames will be logged here");
});
router.get("/new", (req, res) => {
  res.render("new");
});
router.post("/new", (req, res) => {
  console.log("username to be saved : ", req.body.username);
});
module.exports = router;
