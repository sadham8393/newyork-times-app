import axios, { AxiosResponse, AxiosError } from "axios";
import { ArticleApiResponse } from "../../types/articleTypes";
import { API_KEY, BASE_URL } from "../../constants";

export const fetchArticles = async (period: number): Promise<AxiosResponse<ArticleApiResponse>> => {
  try {
    return await axios.get(`${BASE_URL}${period}.json?api-key=${API_KEY}`);
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message || "An unknown error occurred");
  }
};
