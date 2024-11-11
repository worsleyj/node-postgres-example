const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("usernames will be logged here");
});
module.exports = router;
