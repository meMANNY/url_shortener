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
module.exports = {handleGenerateShortUrl};