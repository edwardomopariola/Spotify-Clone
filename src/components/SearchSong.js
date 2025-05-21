import { useState } from "react";

function SearchSong({ onSearch }) {
    const [query, setQuery] = useState("")
    
    const handleSearch = () => {
        onSearch(query);
        setQuery("")
    }

    return (
    <div>
        <h3 className="h2">Search for your favorite songs! or favorite artists </h3>
        <input className='input-field' type="text" value={query} placeholder="search for songs" onChange={(e) => setQuery(e.target.value)} />
        <button className='search-button' onClick={handleSearch}>Search</button>
    </div>
)
}

export default SearchSong;