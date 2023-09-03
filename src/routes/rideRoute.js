const express = require("express");
const router = express.Router();
const rideController = require("../controllers/rideController");
router.get("/list", rideController.listRides);
router.post("/create", rideController.createRides);