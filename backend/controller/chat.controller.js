import Chat from "../model/chat.model.js";

export const getChat=async(req,res)=>{
    try {
        const {buyerId,sellerId}=req.params;
        const chat=await Chat.findOne({buyerId,sellerId});
        res.json(chat|| {
            message:[]});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
}

export const sendMessage=async(req,res)=>{
    try {
        const {buyerId,sellerId}=req.params;
        const {text,sender}=req.body;
        let chat=await Chat.findOne({buyerId,sellerId});
        if(!chat){
            chat=new Chat({buyerId,sellerId,message:[]});
        }
        chat.message.push({text,sender});
        await chat.save();
        res.status(2001).json(chat);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
}