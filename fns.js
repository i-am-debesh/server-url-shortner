import { Url } from "./model.js";
let urlList = [
    {
        "id": '101',
        "url": 'https://youtube.com'
    }
]


function shortURL(generatedID) {

    return `http://localhost:5000/id?url=${generatedID}`;
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