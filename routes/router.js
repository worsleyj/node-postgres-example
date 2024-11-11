const { Router } = require("express");
const {
  getUsernames,
  deleteUsernames,
  createUsernamePost,
} = require("../controllers/usernameController");
const router = Router();

router.get("/", (req, res) => {
  getUsernames(req, res);
});
router.get("/new", (req, res) => {
  res.render("new");
});
router.post("/new", (req, res) => {
  console.log("username to be saved : ", req.body.username);
  createUsernamePost(req, res);
});
router.get("/delete", (req, res) => {
  console.log("deleting usernames...");
  deleteUsernames(req, res);
});
module.exports = router;
