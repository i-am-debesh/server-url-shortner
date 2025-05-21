import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import { getUniqueID, shortURL, getFullLink} from "./fns.js";
import { connectDB } from "./dbConnect.js";
import { saveURL } from "./model.js";



dotenv.config();
const app = express();
app.use(cors());

await connectDB();

app.get('/',(req,res)=>{
    console.log(req.originalUrl);    
    res.json('hello from Debesh');
});

app.get('/userurl', async (req,res)=>{

    console.log(req.query.url);

    const userUrl = req.query.url;
    const uniqueID = await getUniqueID();
    
    const shorturl = shortURL(uniqueID);
    await saveURL(uniqueID, userUrl, shorturl);

    res.json({shortUrl : shorturl});

});

app.get('/id',async (req,res)=>{

    const reqID = req.query.url;
    console.log(reqID);

    const actualURL = await getFullLink(reqID);
    res.redirect(actualURL);
    
});

app.listen(process.env.PORT, ()=>{
    console.log('app is listening at port ',process.env.PORT);
    
});