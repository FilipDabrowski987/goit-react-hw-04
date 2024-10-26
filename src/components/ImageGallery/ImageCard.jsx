const ImageCard = ({ id, small, alt }) => {
    return (
<div id={id}>
  <img src={small} alt={alt} />
    </div>
    )
}

export default ImageCard