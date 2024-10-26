import ImageCard from "./ImageCard";
import "./ImageGallery.css"
	
const ImageGallery = ({images}) => {
return (
	<ul className="image-gallery">
		{images.map(image => (
			<li key={image.id}> 
				<ImageCard
					id={image.id}
					small={image.urls.small}
					alt={image.alt_description || "Brak opisu"}
				/>
			<div>
		</div>
		</li>
	))}
</ul>
    )
}

export default ImageGallery