import api from './api';

const MERCHANT_API_PATH = '/merchants';

export const getMerchants = async (params) => {
  try {
    const response = await api.get(MERCHANT_API_PATH, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching merchants:', error);
    throw error;
  }
};

export const getMerchantById = async (id) => {
  try {
    const response = await api.get(`${MERCHANT_API_PATH}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching merchant with ID ${id}:`, error);
    throw error;
  }
};

export const createMerchant = async (merchantData) => {
  try {
    const response = await api.post(MERCHANT_API_PATH, merchantData);
    return response.data;
  } catch (error) {
    console.error('Error creating merchant:', error);
    throw error;
  }
};

// Add more functions for update, delete etc.