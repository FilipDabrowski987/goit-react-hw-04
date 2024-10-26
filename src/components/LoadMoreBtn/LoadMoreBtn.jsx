const LoadMoreButton = ({ onClick }) => {
    const handleClick = () => {
        console.log('Load more');
        onClick();
    };

    return (
        <button type="button" onClick={handleClick}>
            Load more
        </button>
    );
};

export default LoadMoreButton;