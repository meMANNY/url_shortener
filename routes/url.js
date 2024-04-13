const express = require("express");
const { handleGenerateShortUrl } = require("../controllers/url");   // Import the handleGenerateShortUrl function from the url controller
const router = express.Router();

router.post("/", handleGenerateShortUrl);   // Create a POST route that calls the handleGenerateShortUrl function

module.exports = router;   // Export the router 
