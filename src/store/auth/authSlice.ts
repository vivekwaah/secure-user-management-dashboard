import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface User {
  data: UserData;
  support: any;
}

interface AuthState {
  token: string | null;
  userInfo: User | null,
  userId: string | number | null
}

const userToken = sessionStorage.getItem('userToken')
  ? sessionStorage.getItem('userToken')
  : null

const initialState: AuthState = {
  token: userToken,
  userInfo: null,
  userId: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      sessionStorage.setItem('userToken', action.payload)
      state.token = action.payload;
    },
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    clearToken(state) {
      sessionStorage.removeItem('userToken')
      state.token = null;
    },
    setUser(state, action: PayloadAction<User>) {
      state.userInfo = action.payload;
    },
  },
});

export const { setToken, clearToken, setUserId, setUser } = authSlice.actions;
export default authSlice.reducer;
