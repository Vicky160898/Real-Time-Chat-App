const express = require("express");
const {
  Register,
  LoginAuth,
  SearchResult,
} = require("../controllers/userControllers");
const ProtectRoute = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", Register);
router.post("/login", LoginAuth);
router.get("/", ProtectRoute, SearchResult);
module.exports = router;
