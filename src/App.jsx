// import { useState } from 'react'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import SearchBar from './components/SearchBar/SearchBar'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <Loader />
      <ErrorMessage />
      <ImageGallery />
    </>
  )
}

export default App
