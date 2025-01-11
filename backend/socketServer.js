import { createServer } from 'http';
import { Server } from 'socket.io';


export const setUpServer=(app)=>{
    const server=createServer(app);
    const io=new Server(server);

    io.on('connection',(socket)=>{
        console.log("a user connected");

        socket.on('sendMessage',(data)=>{
            io.to(data.room).emit('receiveMessage',data);
        });

        socket.on('joinRoom',(room)=>{
            socket.join(room);
        });
        socket.on('disconnect',()=>{
            console.log("a user disconnected");
        })  
    });
    return server;
}