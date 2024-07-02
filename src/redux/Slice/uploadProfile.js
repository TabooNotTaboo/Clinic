
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const uploadSlice = createSlice({
  name: 'upload',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    uploadImageStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    uploadImageSuccess: (state) => {
      state.loading = false;
    },
    uploadImageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { uploadImageStart, uploadImageSuccess, uploadImageFailure } = uploadSlice.actions;

export const uploadImage = (formData) => async (dispatch) => {
  dispatch(uploadImageStart());
  try {
    const axiosClient = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
      });
  
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please log in.');
    }

    const response = await axiosClient.post("/users/upload-image-profile", formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

  } catch (error) {
    dispatch(uploadImageFailure(error.message));
    alert('Failed to upload image.');
  }
};

export default uploadSlice.reducer;
