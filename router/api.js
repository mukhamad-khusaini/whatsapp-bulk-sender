const express = require("express");
const router = express.Router();

const routing = require("../controller/whatsappapi");
const generating = require("../controller/chatsender");

router.get("/", routing);
router.post("/chat", generating);

module.exports = router;
