import express from 'express';
import dotenv from 'dotenv';//bu 
import conn from './db.js';
import cookieParser from 'cookie-parser';
import pageRoute from './routes/pageRoute.js';
import photoRoute from './routes/photoRoute.js';
import userRoute from './routes/userRoute.js';
import {checkUser} from './middlewares/authMiddleware.js'

dotenv.config(); // ve bu satır ile .env class taki veriyollarına değişkenlerine ulaşabiliriz

// connecction to the DB
conn();

const app = express();

const port = process.env.PORT;

// ejs tamplate engine
app.set('view engine','ejs');

// static files middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


// routes
app.get("*", checkUser);
app.use("/", pageRoute);
app.use("/photos", photoRoute);
app.use("/users", userRoute);




app.listen(port,()=>{
    console.log('Host Çalıştı');
})

app.get('/adverts',(req,res)=>{
    res.send('İlan 1')
})

app.get('/adverts/advert_110',(req,res)=>{
    res.send('İlan Detay')
})