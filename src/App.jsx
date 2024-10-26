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
  const [images, setImages] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setError(false);
  };

  useEffect(() => {
	
    async function fetchArticles() {
      if (!searchQuery) return;

      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplah.com/search/photos?query=${searchQuery}&per_page=5&client_id=${ACCESS_KEY}`
        );
        setImages(response.data.results);
        setError(false);

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      <ImageGallery images={images} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </>
  )
}

export default App
