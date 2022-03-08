import axios from "axios";

export const signup = (name, email, mobile, password) =>
  axios
    .post(`${process.env.REACT_APP_SERVER_URL}/landing/signup`, {
      name,
      email,
      mobile,
      password,
    })
    .then((res) => res.data);

export const login = (email, password) =>
  axios
    .post(`${process.env.REACT_APP_SERVER_URL}/login`, {
      email,
      password,
    })
    .then((res) => res.data);

export const getUser = (token) =>
  axios
    .get(`${process.env.REACT_APP_SERVER_URL}/getuser`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    })
    .then((res) => res.data);
