const express = require("express");
const router = express.Router();

const whatsappapi = require("../controller/whatsappapi");

router.get("/", whatsappapi);
