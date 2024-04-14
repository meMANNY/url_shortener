const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url");
const app = express();
const Url = require('./models/url');
const {connectdb} = require('./connection');
const route = require("./routes/staticRouter");

const PORT = 8001;

connectdb('mongodb://localhost:27017/url-shortener');

app.set("view engine", "ejs"); 
app.set("views", path.resolve("./views"));
app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use("/url", urlRoute);

app.use("/", route);

app.get("/test", async (req, res) => {
    const allUrls = await Url.find();
    return res.render("home", {urls: allUrls});
});

app.get("/url/:shortId", async(req,res)=>{
    const shortId = req.params.shortId;
    const url = await Url.findOneAndUpdate({
        shortId: shortId
    },{
        $push: {visitHistory: {timestamp:Date.now()}}
    })

    res.redirect(url.redirectUrl);
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});