import "./ImageGallery.css"

const ImageCard = ({ id, small, alt }) => {
    return (
<div className="image-gallery-item" id={id}>
  <img src={small} alt={alt} width="300"/>
    </div>
    )
}

export default ImageCard