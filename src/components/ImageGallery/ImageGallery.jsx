import ImageCard from "./ImageCard";
import "./ImageGallery.css"
	
const ImageGallery = ({images, onImageClick}) => {
return (
	<ul className="image-gallery">
		{images.map(image => (
			<li key={image.id} onClick={() => onImageClick(image)}> 
				<ImageCard
					id={image.id}
					small={image.urls.small}
					alt={image.alt_description || "Brak opisu"}
				/>
		</li>
	))}
</ul>
    )
}

export default ImageGallery