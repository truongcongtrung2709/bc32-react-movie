import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../services/authAPI";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};
// signin action
export const signin = createAsyncThunk("auth/signin", async (values) => {
  try {
    const data = await authAPI.singin(values);
    // lưu thông tin user xuống localStorage
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
});

// signup action
export const signup = createAsyncThunk("auth/signup", async (values) => {
  try {
    const data = await authAPI.signup(values);

    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("user");
      return { ...state, user: null };
    },
  },
  extraReducers: (builder) => {
    //signin
    builder.addCase(signin.pending, (state, action) => {
      return { ...state, loading: true };
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      return { ...state, loading: false, user: action.payload };
    });
    builder.addCase(signin.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error.message };
    });

    //signup
    builder.addCase(signup.pending, (state, action) => {
      return { ...state, loading: true };
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      return { ...state, loading: false, user: action.payload };
    });
    builder.addCase(signup.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error.message };
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
