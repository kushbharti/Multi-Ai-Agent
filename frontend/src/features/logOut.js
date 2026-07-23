import api from "../../utils/axios";

async function logOut() {
  try {
    const { data } = await api.get("/api/auth/logout");
    console.log(`logout Data: => ${data}`);
  } catch (error) {
    console.log(`logout error: => ${error}`);
  }
}

export default logOut;
