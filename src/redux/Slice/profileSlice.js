import axios from "axios";

async function fetchUserProfile(token) {
  try {
    const axiosClient = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token || ""}`,
      },
    });

    const response = await axiosClient.post("/users/my-profile");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch user profile");
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

export default fetchUserProfile;
