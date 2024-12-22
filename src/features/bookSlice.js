// src/features/bookSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: '',
  author: '',
  title: '',
  story: '',
  pages: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBookLanguageAndAuthor: (state, action) => {
      const { language, author } = action.payload;
      state.language = language;
      state.author = author;
    },
    setBookTitle: (state, action) => {
      state.title = action.payload;
    },
    setStory: (state, action) => {
      state.story = action.payload;
    },
    setBookPages: (state, action) => {
      state.pages = action.payload;
    },
    resetBook: () => initialState,
  },
});

export const { setBookLanguageAndAuthor, setBookTitle, setStory, setBookPages, resetBook } = bookSlice.actions;

export default bookSlice.reducer;
