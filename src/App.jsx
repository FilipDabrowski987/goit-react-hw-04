import { useState, useEffect } from 'react'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import SearchBar from './components/SearchBar/SearchBar'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import axios from "axios";

const ACCESS_KEY = "55GPw0K7bd-oQAytDhU3pRCr2Dw7Tzr_28b5bL0corA";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const[images, setImages] = useState([]); 

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
	
    async function fetchArticles() {
      if (!searchQuery) return;

      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=12&client_id=${ACCESS_KEY}`
        );
        setImages(response.data.results);

      } catch (error) {
        console.error("Wystąpił błąd podczas pobierania zdjęć:", error);
      }
    }

    fetchArticles();
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      <Loader />
      <ErrorMessage />
      <ImageGallery images={images}/>
    </>
  )
}

export default App
