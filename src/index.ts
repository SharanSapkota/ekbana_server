

import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
// import ApiRoutes from "./routes";

const app = express()
const a = dotenv.config();
console.log(process.env.PORT)
// app.use('/api', ApiRoutes)

// const ur = 'mongodb+srv://sharan123:sharan123k@cluster0.ytgcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(
process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,

        useUnifiedTopology: true,
        useFindAndModify: false
    }, () => {
        console.log("DB connection established")
    }
)


app.listen(process.env.PORT, () => {
    console.log("server started at port: 5000")
})