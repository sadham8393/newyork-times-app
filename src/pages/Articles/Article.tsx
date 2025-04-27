import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../actions/slices/articleSlice";
import { RootState } from "../../actions/store";
import { ArticleSkeletonList } from "./ArticleSkeletonList";
import { ArticleList } from "./ArticleList";
import { ArticlePeriod, SELECT_DAYS } from "../../constants";
import ArticleError from "./ArticleError";

const Article = () => {
    const dispatch = useDispatch();
    const { data: articles, loading, error } = useSelector((state: RootState) => state.articles);

    const [period, setPeriod] = useState(1);

    useEffect(() => {
        dispatch(fetchArticles(period));
    }, [dispatch, period]);

    const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPeriod(Number(event.target.value));
    };

    return (
        <div>
            {/* Select days filter */}
            <div className="mb-5 flex justify-end items-center gap-2 pr-4">
                <label className="text-gray-700">{SELECT_DAYS}</label>
                <select
                    value={period}
                    onChange={handlePeriodChange}
                    className="border p-2 rounded"
                >
                    <option value={1}>{ArticlePeriod.OneDay}</option>
                    <option value={7}>{ArticlePeriod.SevenDays}</option>
                    <option value={30}>{ArticlePeriod.ThirtyDays}</option>
                </select>
            </div>

            {/* Conditional rendering based on loading, error, or no articles */}
            {loading ? (
                <ArticleSkeletonList count={6} />
            ) : error ? (
                <ArticleError
                    message="Failed to load articles."
                    onRetry={() => dispatch(fetchArticles(period))}
                />
            ) : articles.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-600">No articles found</p>
                </div>
            ) : (
                <ArticleList articles={articles} />
            )}

        </div>
    );
};

export default Article;
