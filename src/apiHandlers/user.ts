import axios from "axios";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/users`
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Internal Server Error" };
  }
};

export const registerUser = async (registerFormData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_AUTH}/register`,
      registerFormData
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Internal Server Error" };
  }
};
