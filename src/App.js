import { useState } from 'react';  // Import React hooks for state and effect management
import SearchSong from "./components/SearchSong";
import searchTrack from "./utils/searchTrack";  // Import the searchTrack function to perform the search
import './index.css';  // Import the CSS file for styling

function App() {
  const [query, setQuery] = useState("");  // State to store the search query
  const [tracks, setTracks] = useState([]);  // State to store search result
  
  const handleSearch = async (query) => {
    try {
      const results = await searchTrack(query);  // Call the searchTrack function with the query
      setTracks(results || []);  // Update the results state with the search results
      setQuery("");  // Clear the search input

    } catch (error) {
      console.error("Error fetching tracks:", error);  // Log any errors to the console
      // setError("Failed to fetch tracks. Please try again.");  // Optionally set an error message
    }
  }

  return (
    <div className="App">
      <h1 className='h1'>Spotify Music App</h1>
      <SearchSong onSearch={handleSearch} />  {/* Pass the handleSearch function to the SearchSong component */}
      <div className="results-container">
          {tracks.map((track) => (
            <div className="output" key={track.id}>
              <img className='profile-image' src={track.album.images[0].url} alt={track.name} />
              <p className='name'>{track.album.name}</p>
              <p className='date'>{track.album.release_date}</p>
              <p>{track.album.artists.map((artist) => artist.name).join(", ")}</p>  
              <a className="link-to" href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                {track.name} - {track.artists.map((artist) => artist.name).join(", ")}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;