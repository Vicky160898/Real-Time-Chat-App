import { Box } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../Context/ChatProvider";
import ChatBox from "../miscellaneous/ChatBox";
import MyChats from "../miscellaneous/MyChats";
import SideDrawer from "../miscellaneous/SideDrawer";

export default function Chats() {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        d="flex"
        justifyContent={"space-between"}
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
}
