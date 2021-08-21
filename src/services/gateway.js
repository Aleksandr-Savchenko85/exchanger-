import axios from 'axios';

const baseURL = 'https://involve.software/test_front/api';

export const getMethodList = async () => {
  const url = `${baseURL}/payMethods
  `;
  let response = {};
  try {
    response = await axios.get(url);
  } catch (error) {
    console.log('Failed get method list');
    throw error;
  }
  return response.data;
};

export const calculateCrypto = async () => {
  const url = `${baseURL}/payMethods/calculate
    `;
  let response = {};
  try {
    response = await axios.get(url);
  } catch (error) {
    console.log('Failed calculate');
    throw error;
  }
  return response.data;
};
