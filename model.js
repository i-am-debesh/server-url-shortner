import mongoose from "mongoose"

const UrlSchema = new mongoose.Schema({
    shortCode: String,
    fullUrl: String
});
const Url = mongoose.model('Url', UrlSchema);

async function saveURL(shortCode,fullUrl) {
    const newUrl = new Url({ shortCode: shortCode, fullUrl: fullUrl });
    newUrl.save().then(() => console.log("Saved to DB"));
}

export {saveURL, Url}