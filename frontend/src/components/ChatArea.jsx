import { useEffect } from "react";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import getMessages from "../features/getMessages";
import { setMessages } from "../redux/messageSlice";
import { useDispatch } from "react-redux";

function ChatArea() {
  const dispatch = useDispatch();
  const { selectedConversation } = useSelector((state) => state.conversation);
  console.log("Selected Conversation:", selectedConversation);
  useEffect(() => {
    const getMsg = async () => {
      if (!selectedConversation) return;

      const data = await getMessages(selectedConversation._id);

      console.log("Fetched:", data);

      dispatch(setMessages(data));
    };

    getMsg();
  }, [selectedConversation, dispatch]);

  return (
    <div className="flex-1 flex flex-col">
      <Nav />
      <MessageList />
      <ChatInput />
    </div>
  );
}

export default ChatArea;
