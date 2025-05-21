// import axios from 'axios';  // Import axios for making HTTP requests
// import getAccessToken from './components/AccessToken';  // Import the function to get the access token
import { useState } from 'react';  // Import React hooks for state and effect management
import SearchSong from "./components/SearchSong";
import SearchTrack from "./components/SearchTrack";

function App() {
  const [query, setQuery] = useState("");  // State to store the search query
  const [results, setResults] = useState([]);  // State to store search results
  // const [accessToken, setAccessToken] = useState("");   // State to store the access token
  // const [error, setError] = useState(null);  // State to store any error messages
  
  const handleSearch = async (query) => {
    const results = await SearchTrack(query);  // Call the searchTrack function with the query
    setResults(results);  // Update the results state with the search results
    setQuery("");  // Clear the search input
  }

  return (
    <div>
      <h1>Spotify Search App</h1>
      <SearchSong onSearch={handleSearch} />  {/* Pass the handleSearch function to the SearchSong component */}
      {/* {error && <p>Error: {error}</p>}  Display any error messages */}
      {results.length > 0 && (
        <ul>
          {results.map((track) => (
            <li key={track.id}>
              <img src={track.album.images[0].url} alt={track.name} />
              <p>{track.name} by {track.artists[0].name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;