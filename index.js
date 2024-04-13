const express = require("express");
const urlRoute = require("./routes/url");
const app = express();

const {connectdb} = require('./connection');

const PORT = 8001;

connectdb('mongodb://localhost:27017/url-shortener');

app.use("/url", urlRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});