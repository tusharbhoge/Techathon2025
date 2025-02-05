import connectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.on("errror",(error)=>{
        console.log("ERRR :",error)
        throw error
    })

    app.listen(process.env.PORT || 8000,()=>{
        console.log(`MONGODB connected !!! at port :${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGODB connection Failed", error)
    
})