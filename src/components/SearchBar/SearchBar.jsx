import './SearchBar.css'
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onSearch }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.elements.image.value;

        if (form.elements.image.value.trim() === "") {
			alert("Wpisz frazę do wyszukania")
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
        </div>
</header>
    )
}

export default SearchBar