import mongoose from "mongoose";

const chatSchema=new mongoose.Schema({
    buyerId:{
        type:String,
        require:true
    },
    sellerId:{
        type:String,
        require:true
    },
    message:[
        {
            text:{
                type:String,
                require:true
            },
            sender:{
                type:String,
                require:true
            },
            timeStamp:{
                type:Date,
                default:Date.now
            }
        }

    ]
},{
    timestamps:true
});


const Chat=mongoose.model("Chat",chatSchema);
export default Chat
