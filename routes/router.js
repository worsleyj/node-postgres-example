const { Router } = require("express");
const {
  getUsernames,
  deleteUsernames,
  searchUsernames,
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
  createUsernamePost(req, res);
});
router.get("/delete", (req, res) => {
  console.log("deleting usernames...");
  deleteUsernames(req, res);
});
router.get("/search", (req, res) => {
  res.render("search");
});
router.post("/search", (req, res) => {
  searchUsernames(req, res);
});
module.exports = router;
