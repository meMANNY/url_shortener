const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory:[{timestamp: {type: number}}],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{timestamps: true});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;