import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export const fetchCustomers = () => api.get("/customers");
export const fetchCustomerById = (id) => api.get(`/customers/${id}`);
export const createCustomer = (data) => api.post("/customers", data);
export const updateCustomer = (id, data) => api.patch(`/customers/${id}`, data);
export const deleteCustomer = (id) => api.delete(`/customers/${id}`);

export const fetchAddresses = () => api.get("/addresses");
export const fetchAddressById = (id) => api.get(`/addresses/${id}`);
export const createAddress = (data) => api.post("/addresses", data);
export const updateAddress = (id, data) => api.patch(`/addresses/${id}`, data);
export const deleteAddress = (id) => api.delete(`/addresses/${id}`);
export const addAddressToCustomer = (customerId, data) =>
  api.post(`/customers/${customerId}/addresses`, data);

export default api;
