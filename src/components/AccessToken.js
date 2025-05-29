import axios from "axios";

const getAccessToken = async () => {   // Function to fetch the Spotify access token from the server
    // This function makes a GET request to the server endpoint that provides the Spotify access token
    try {
        const response = await axios.get("http://localhost:5000/getSpotifyToken");
        return response.data.access_token;

    } catch (error) {  // Catch any errors that occur during the request
        console.error("Error fetching access token:", error.response?.data || error.message);
        return null;  // Return null if there's an error fetching the token
    }
};

export default getAccessToken;