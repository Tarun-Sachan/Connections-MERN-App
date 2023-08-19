import axios from "axios";


const API_URL = "https://connections-mern-app.onrender.com/api/v1/auth/";
//const API_URL = "http://localhost:5000/api/v1/auth/";

//register user
const register = async (userData) => {
  const response = await axios.post(API_URL+ "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//logout user
const logout = () =>{
  localStorage.removeItem("user")
}
const authService = {
  register,logout,login
};

export default authService;
