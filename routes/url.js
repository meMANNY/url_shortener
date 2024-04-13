const express = require("express");
const { handleGenerateShortUrl, handleGetanalytics } = require("../controllers/url");   // Import the handleGenerateShortUrl function from the url controller
const router = express.Router();

router.post("/", handleGenerateShortUrl);   // Create a POST route that calls the handleGenerateShortUrl function
router.get("/analytics/: shortId", handleGetanalytics);   // Create a GET route that calls the handleGetanalytics function
module.exports = router;   // Export the router 
