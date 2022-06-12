import axios from "axios";
import authHeader from "../access_token_header";

export const Nifty_api = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/nse-options-nifty`, { headers: authHeader });
  console.log("nifty ===>",res.data)
  return res.data;
};
export const BankNifty_api = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/nse-options-banknifty`, { headers: authHeader }
  );
  return res.data;
};
