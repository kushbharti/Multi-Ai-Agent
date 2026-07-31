import api from "./../../utils/axios";

export const createConversation = async () => {
  try {
    const { data } = await api.get("/api/chat/create-conversation");
    console.log(data);
    return data.conversation;
  } catch (error) {
    console.log(error);
    return [];
  }
};
