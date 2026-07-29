import axios from "axios";

export const getMessages = async (consversationId) => {
  try {
    const { data } = await axios.get(
      `${process.env.CHAT_SERVICE}/get-messages/${consversationId}`,
      {
        conversationId,
        role: "user",
        content: prompt,
      },
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
