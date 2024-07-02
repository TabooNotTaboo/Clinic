import axios from 'axios'; 
export const saveProfileData = async (formData) => {
  try {
    const token = localStorage.getItem('token');
    const axiosClient = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL, 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const response = await axiosClient.post('/companies', formData);
    if (response.status === 200 || response.status === 201) {
      console.log('Data saved successfully');
      return { success: true, message: 'Yêu cầu của bạn đang được xem xét!!' };
    } else {
      console.error('Failed to save data');
      return { success: false, message: 'Failed to save data' };
    }
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'Error occurred while saving data' };
  }
};
