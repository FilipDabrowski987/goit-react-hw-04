import { useState, useEffect } from 'react'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import SearchBar from './components/SearchBar/SearchBar'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreButton from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import axios from "axios";

const ACCESS_KEY = "55GPw0K7bd-oQAytDhU3pRCr2Dw7Tzr_28b5bL0corA";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelctedImage] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
    setError(false);
  };

  useEffect(() => {
	
    async function fetchImages() {
      if (!searchQuery) return;

      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${searchQuery}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        setError(false);

      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [searchQuery, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

 const handleImageClick = (image) => {
   setIsModalOpen(true);
   setSelctedImage(image);
 };
  
 const closeModal = () => {
   setIsModalOpen(false);
   setSelctedImage()
  };

  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <LoadMoreButton onClick={loadMore} />
      <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} image={selectedImage}/>
    </>
  )
}

export default App
