import axios from 'axios';

const API_BASE = 'http://your-api-endpoint.com/api';

export const submitEcuData = (data) => axios.post(`${API_BASE}/ecu`, data);
export const submitVinData = (data) => axios.post(`${API_BASE}/vin`, data);
export const submitCustomerData = (data) => axios.post(`${API_BASE}/customer`, data);
export const searchVin = (vin) => axios.get(`${API_BASE}/search?vin=${vin}`);
export const getVinMappings = () => axios.get(`${API_BASE}/mappings`);