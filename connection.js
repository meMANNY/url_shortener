const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
async function connectdb(url){
    return mongoose.connect(url);
}
module.exports = connectdb;