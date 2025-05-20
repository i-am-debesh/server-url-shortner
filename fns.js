import { Url } from "./model.js";

function shortURL(generatedID) {

    const customURL = `https://d391.onrender.com/id?url=${generatedID}`;

    const localURL = `http://localhost:5000/id?url=${generatedID}`;

    return customURL;
}

async function getUniqueID() {

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let isUnique = false;
    let code = '';

    while (!isUnique) {
        // Generate 3-character code : can generate upto 62^3 = 238,328 combinations
        code = '';
        for (let i = 0; i < 3; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        // Check if it already exists in the database
        const existing = await Url.findOne({ shortCode: code });
        if (!existing) {
            isUnique = true;
        }
    }

    return code;
}



async function getFullLink(id){
    const record = await Url.findOne({shortCode: id});
    if(record) {
        return record.fullUrl;
    }else {
        return -1;
    }
}
export {shortURL, getUniqueID, getFullLink}