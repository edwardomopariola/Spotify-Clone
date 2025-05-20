import SearchSong from "./components/SearchSong";

function App() {
  function handleSearch(query) {
    console.log("Searching for:", query);
  }
  return (
    <div>
      <h1>My React App</h1>
      <SearchSong onSearch={handleSearch} />
   
    </div>
  );
}

export default App;