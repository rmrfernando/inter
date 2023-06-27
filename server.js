import express from "express";
import cors from "cors";
import connect from "./db/database.js";


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/api", (req,res) =>{
    res.json({message:"server is started"})
})

const init = async() =>{
    try{
        await connect();
        app.listen(port, ()=>{
            console.log("server is listening")
        });
    }
    catch(error){
console.log(error);
    }
}

init();