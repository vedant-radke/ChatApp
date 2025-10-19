"use client";
import React, { useState, useEffect, useMemo, Fragment } from "react";

import { getSocket } from "@/lib/socket.config";
import { Button } from "../ui/button";

export default function ChatBase() {
  const [open, setOpen] = useState(true);
  const [chatUser, setChatUser] = useState<GroupChatUserType>();

  const socket = useMemo(() => getSocket(), []);

  useEffect(() => {
    socket.connect();

    const handleIncoming = (data: any) => {
      console.log("Received message:", data);
    };

    socket.on("message", handleIncoming);

    return () => {
      socket.off("message", handleIncoming);
      socket.disconnect();
    };
  }, [socket]);

  const handleClick = () => {
    socket.emit("message", { message: "Hello from ChatBase!" });
  };

  return (
    <div className="flex">
      <Button onClick={handleClick}>Send Message</Button>
    </div>
  );
}
