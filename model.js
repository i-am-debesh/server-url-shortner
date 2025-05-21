import mongoose from "mongoose"

const UrlSchema = new mongoose.Schema({
    shortCode: String,
    fullUrl: String,
    shortUrl: PerformanceServerTiming
});
const Url = mongoose.model('Url', UrlSchema);

async function saveURL(shortCode,fullUrl, shortUrl) {
    const newUrl = new Url(
        {
            shortCode: shortCode, 
            fullUrl: fullUrl,
            shortUrl: shortUrl
        });
    newUrl.save().then(() => console.log("Saved to DB"));
}

export {saveURL, Url}