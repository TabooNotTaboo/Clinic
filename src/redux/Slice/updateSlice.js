import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const updateCompanyProfile = createAsyncThunk(
  'company/updateProfile',
  async ({ token, userData }) => {
    try {
      const axiosClient = axios.create({
        baseURL: BASE_URL,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const response = await axiosClient.put("/companies", userData);
      
      if (response.status === 200) {
        return userData; 
      } else {
        throw new Error('Failed to update company profile');
      }
    } catch (error) {
      throw error;
    }
  }
);

const updateSlice = createSlice({
  name: 'update',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [updateCompanyProfile.pending]: (state) => {
      state.status = 'loading';
    },
    [updateCompanyProfile.fulfilled]: (state) => {
      state.status = 'succeeded';
    },
    [updateCompanyProfile.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default updateSlice.reducer;
