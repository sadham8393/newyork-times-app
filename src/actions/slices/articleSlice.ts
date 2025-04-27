import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../../types/articleTypes";

interface ArticleState {
  data: Article[];
  loading: boolean;
  error: string | null;
  period: number;
}

const initialState: ArticleState = {
  data: [],
  loading: false,
  error: null,
  period: 1,
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    fetchArticles(state, action: PayloadAction<number>) {
      state.loading = true;
      state.error = null;
      state.period = action.payload;
    },
    fetchArticlesSuccess(state, action: PayloadAction<Article[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchArticlesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchArticles, fetchArticlesSuccess, fetchArticlesFailure } = articleSlice.actions;

export default articleSlice.reducer;
