import axios from "axios";

export const getMessages = async (conversationId) => {
  try {
    const { data } = await axios.get(
      `${process.env.CHAT_SERVICE}/get-message/${conversationId}`,
    );
     console.log("Messages:", data);

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
