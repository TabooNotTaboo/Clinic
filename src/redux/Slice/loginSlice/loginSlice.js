import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest } from "../../../services/api";

// Tạo async thunk
export const login = createAsyncThunk(
  "authentication/login",
  async ({ phoneNumber, password }, { rejectWithValue }) => {
    try {
      // Send login request
      const response = await postRequest("authentication/login", {
        phoneNumber,
        password,
      });

      // Check if the response status is 200 (success)
      if (response.status === 200) {
        console.log("Login successful");
        console.log("Response:", response);

        // Save access token and refresh token to localStorage
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        // Return user data from API response
        return response.data;
      } else {
        throw new Error(response.data.message || "Login failed");
      }
    } catch (error) {
      // Return a custom error message or server error
      return rejectWithValue(error.message);
    }
  }
);
export const signUp = createAsyncThunk(
  "user/signUp",
  async (
    { fullname, email, username, password, phoneNumber },
    { rejectWithValue }
  ) => {
    try {
      //response always return  a resolve promise
      const response = await postRequest("users/register", {
        fullname,
        email,
        username,
        password,
        phoneNumber,
      });
      // Lưu access token vào localStorage có thể xem xét thực hiện ngoài component

      if (response.status === 201) {
        console.log("Vui lòng check mail của bạn");

        return response?.data;
      }
    } catch (error) {
      // Trả về một custom error message hoặc error từ server
      return rejectWithValue(error.message);
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "user/signUp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await postRequest("users/forgot-password", {
        email,
      });

      if (response.status === 200) {
        console.log("oke");

        return response?.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const changePassword = createAsyncThunk(
  "user/changePassword",
  async ({ authorization, oldPassword, newPassword }, { rejectWithValue }) => {
    try {
      const response = await postRequest("users/change-password", {
        authorization,
        oldPassword,
        newPassword,
      });

      if (response.status === 200) {
        console.log("oke");

        return response?.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,
};
export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Could not log in. Please try again.";
      });
  },
});

export default loginSlice.reducer;
