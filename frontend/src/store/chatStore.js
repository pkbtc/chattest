import create from 'zustand';
import {io} from "socket.io-client";

const socket=io("http://localhost:3000");

const useChatStore=create((set)=>({
    messages:[],
    room:null,
    addMessage:(message)=>{
        set((state)=>({messages:[...state.messages,message]}))
    },
    joinRoom:(room)=>{
        socket.emit('joinRoom',room);
        set({room,message:[]});
    },
    sendMessage:(message)=>{
        socket.emit('sendMessage',message);
        set((state)=>({messages:[...state.messages,message]}));
    },
    initializeSocketListeners:()=>{
        socket.on('receiveMessage',(message)=>{
            set((state)=>({messages:[...state.messages,message]}));
        });
    }
}));

export default useChatStore;
