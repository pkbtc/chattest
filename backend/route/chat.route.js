import express from "express";
import { sendMessage,getChat } from "../controller/chat.controller.js";

const chatRoute=express.Router();

chatRoute.post("/sendMessage/:buyerId/:sellerId",sendMessage);
chatRoute.get("/getChat/:buyerId/:sellerId",getChat);

export default chatRoute;