import "./LoadMoreBtn.css"

const LoadMoreButton = ({ onClick }) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <div className="load-more-button-container">
        <button className="load-more-button" type="button" onClick={handleClick}>
            Load more
            </button>
        </div>
    );
};

export default LoadMoreButton;