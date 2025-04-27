import React from "react";

interface ErrorStateProps {
    message?: string;
    onRetry: () => void;
}

const ArticleError: React.FC<ErrorStateProps> = ({ message = "Failed to load articles.", onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <p data-testid="error-message" className="text-red-500 mb-4">
                {message}
            </p>
            <button
                data-testid="retry-button"
                onClick={onRetry}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Retry
            </button>
        </div>
    );
};

export default ArticleError;

