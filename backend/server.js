import express from "express";
import { setUpServer } from "./socketServer.js";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.js";
import chatRoute from "./route/chat.route.js";

dotenv.config();
const app=express();

const PORT=process.env.PORT || 5000;
app.use(express.json());

app.use("/api/v1/chat",chatRoute);
const server=setUpServer(app);

app.listen(PORT,async()=>{
    await connectDB();
    console.log(`server is running on port ${PORT}`);
});


