import ChatBase from "@/components/chat/ChatBase";
import { fetchChats } from "@/fetch/chatsFetch";

import { fetchChatGroup, fetchChatGroupUsers } from "@/fetch/groupFetch";
import { notFound } from "next/navigation";
import React from "react";

export default async function chat({ params }: { params: { id: string } }) {
  // const { id } = await params;
  // if (id.length !== 36) {
  //   return notFound();
  // }
  // const chatGroup: GroupChatType | null = await fetchChatGroup(id);
  // if (chatGroup === null) {
  //   return notFound();
  // }
  // const chatGroupUsers: Array<GroupChatUserType> | [] =
  //   await fetchChatGroupUsers(id);
  // const chats: Array<MessageType> | [] = await fetchChats(id);

  return (
    <div>
      <h1>heelo i am chat</h1>
      <ChatBase />
    </div>
  );
}