import { Server, Socket } from "socket.io";
// import { produceMessage } from "./helper.js";


export function setupSocket(io: Server) {

  

  io.on("connection", (socket) => {
    console.log("socket connected", socket.id);
    

    socket.on("message", async (data) => {
      try {
        console.log("server side messaeg is", data.message);
        socket.broadcast.emit("message", data.message);
        
        // await produceMessage("chats", data);
      } catch (error) {
        console.log("The kafka produce error is", error);
      }
      // socket.to(socket.room).emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });
  });
}