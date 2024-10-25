const SearchBar = ({onSearch}) => {
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
  <form onSubmit={handleSubmit}>
    <input
      className="input"
                type="text"
                name="image"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
		<button type="submit">Search</button>
  </form>
</header>
    )
}

export default SearchBar