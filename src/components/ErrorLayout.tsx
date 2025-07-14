import React from "react";
import GradientBorder from "./ui/GradientBorder";

const ErrorLayout = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <div className="error-layout">
            <h1>Oops !</h1>
            <h2>Something went wrong on the project page!</h2>
            <p>{error.message}</p>
            <GradientBorder>
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try again
                </button>
            </GradientBorder>
        </div>
    );
};

export default ErrorLayout;
