import { io, Socket } from "socket.io-client";
import Env from "./env";
let socket: Socket;
export const getSocket = () => {
  if (!socket) {
    socket = io(Env.BACKEND_URL, {withCredentials: true, autoConnect: false });
  }
  return socket;
};