import api from "./../../utils/axios";

async function sendMessage(payload) {
  try {
    const response = await api.post("/api/agent/chat", payload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default sendMessage;
