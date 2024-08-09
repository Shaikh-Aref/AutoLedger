import axios from "axios";
import { fetch_admin_login, save_admin_login, save_contact_us_route } from "../constants/ApiConstants";

export function Save_Contact_Us(data) {
  return axios.post(save_contact_us_route, data);
}

export function adminLogin(loginCredentials){
  return axios.post(fetch_admin_login,loginCredentials);
}

export function register(logincredentials){
  return axios.post(save_admin_login,logincredentials)
}

