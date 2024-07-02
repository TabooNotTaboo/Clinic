import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
export async function verifyEmail(email, hash) {
    try {
      const response = await axiosClient.post('/users/verifyEmail', { email, hash });
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Email verification failed');
      }
    } catch (error) {
      console.error('Verification API error:', error);
      throw error;
    }
  }
  