import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const analyzeUser = async (username) => {
  const response = await client.post('/api/analyze', { username });
  return response.data;
};

export const getRecommendations = async (type, username, options = {}) => {
  const response = await client.post(`/api/recommend/${type}`, { username, options });
  return response.data;
};

export const getUserStatus = async (username) => {
  const response = await client.get(`/api/status/${username}`);
  return response.data;
};
