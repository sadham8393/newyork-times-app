// src/sagas/articleSaga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchArticlesSuccess, fetchArticlesFailure, fetchArticles } from "../slices/articleSlice";
import { fetchArticles as fetchArticlesApi } from "../api/articleAPI";
import { AxiosResponse, AxiosError } from "axios";
import type { SagaIterator } from "redux-saga";
import { PayloadAction } from "@reduxjs/toolkit";
import { ArticleApiResponse } from "../../types/articleTypes";

export function* fetchArticlesSaga(action: PayloadAction<number>): SagaIterator {
  try {
    const response: AxiosResponse<ArticleApiResponse> = yield call(fetchArticlesApi, action.payload); // Pass period to the API function
    yield put(fetchArticlesSuccess(response.data.results || []));
  } catch (error) {
    const err = error as AxiosError;
    const message = err.message || "An unknown error occurred";
    yield put(fetchArticlesFailure(message));
  }
}

export function* watchArticleSaga(): SagaIterator {
  yield takeLatest(fetchArticles.type, fetchArticlesSaga);
}
