import axios from "axios";
import { GET_CUSTOMER_API_ROUTE, REMOVE_CUSTOMER_API_ROUTE, SAVE_CUSTOMER_API_ROUTE, UPDATE_STUDENT_API_ROUTE } from "../constants/ApiConstants";

export function saveCustomer(customerData){
    return axios.post(SAVE_CUSTOMER_API_ROUTE,customerData)
} 

export function fetchCustomer(){
    return axios.get(GET_CUSTOMER_API_ROUTE);
}

export function removeCustomer(customerId){
    return axios.delete(`${REMOVE_CUSTOMER_API_ROUTE}/${customerId}`);
}

export function fetchCustomerByID(customerId){
    return axios.get(`${GET_CUSTOMER_API_ROUTE}/${customerId}`);
}

export function updateCustomer(customerData){
    return axios.put(`${UPDATE_STUDENT_API_ROUTE}/${customerData.Sr_No}`, customerData); 
}
