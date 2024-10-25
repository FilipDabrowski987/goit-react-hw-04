// import { useState } from 'react'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <ImageGallery />
    </>
  )
}

export default App
