import ImageCard from "./ImageCard";
	
const ImageGallery = ({images}) => {
return (
	<ul>
		{images.map(image => (
			<li key={image.id}> 
				<ImageCard
					id={image.id}
					small={image.urls.small}
					alt={image.alt_description || "Brak opisu"}
					// small={image.user.profile_image.small}
				/>
			<div>
		</div>
		</li>
	))}
</ul>
    )
}

export default ImageGallery