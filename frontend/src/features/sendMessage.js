import api from "./../../utils/axios";

async function sendMessage(payload) {
  try {
    const { data } = await api.post("/api/agent/chat", payload);
    console.log(data.response);
    return data.response;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default sendMessage;
