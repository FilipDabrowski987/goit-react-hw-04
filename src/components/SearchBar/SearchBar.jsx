import { BsSearch } from "react-icons/bs";
import { BsExclamationTriangle } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.elements.image.value;

        if (form.elements.image.value.trim() === "") {
			toast('Wpisz frazę do wyszukania', {
        icon: <BsExclamationTriangle />,
        });
            return;
        }

        onSearch(image);

        form.reset();
  }
  
return (
<header>
    <div className='search-bar-container'>
  <form onSubmit={handleSubmit} className="search-bar-wrapper">
    <button className='search-bar-button' type="submit">
        <BsSearch />
    </button>
    <input
      className="search-bar-input"
        type="text"
        name="image"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />	
      </form>
      <Toaster
      position="top-right"
      reverseOrder={false}/>
        </div>
</header>
    )
}

export default SearchBar