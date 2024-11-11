const { Router } = require("express");
const { getUsernames } = require("../controllers/usernameController");
const router = Router();

router.get("/", (req, res) => {
  getUsernames(req, res);
});
router.get("/new", (req, res) => {
  res.render("new");
});
router.post("/new", (req, res) => {
  console.log("username to be saved : ", req.body.username);
});
module.exports = router;
