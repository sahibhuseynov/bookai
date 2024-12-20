import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Kullanıcı bilgileri burada tutulacak
  error: null, // Hata mesajları burada tutulacak
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Kullanıcı bilgilerini Redux'a kaydediyoruz
    },
    setError: (state, action) => {
      state.error = action.payload; // Hata mesajını Redux'a kaydediyoruz
    },
    clearUser: (state) => {
      state.user = null; // Kullanıcı bilgilerini temizliyoruz
    },
  },
});

export const { setUser, setError, clearUser } = userSlice.actions;
export default userSlice.reducer;
