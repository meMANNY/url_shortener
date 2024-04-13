const {nanoid} = require('nanoid');
const Url = require('../models/url');
async function handleGenerateShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({message: 'url is required'}); 
    const shortId = nanoid(8);
    await Url.create({shortId: shortId, 
        redirectUrl: body.url,
        visitHistory: []
    });
return res.json({id: shortId});

}
async function handleGetanalytics(req,res){
    const shortId = req.params.shortId;
    const result = await Url.findOne({
        shortId: shortId
    });

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}
module.exports = {handleGenerateShortUrl, handleGetanalytics};