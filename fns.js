import { Url } from "./model.js";

function shortURL(generatedID) {

    const customURL = `https://urlsh-z944.onrender.com/id?url=${generatedID}`;

    const localURL = `http://localhost:5000/id?url=${generatedID}`;

    return customURL;
}

async function getUniqueID() {
    let isUnique = false;
    let code;

    while(!isUnique) {
        code = Math.floor(Math.random()*100)+1;

        const existing = await Url.findOne({shortCode:code});

        if(!existing) {
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
export {shortURL, urlList, getUniqueID, getFullLink}