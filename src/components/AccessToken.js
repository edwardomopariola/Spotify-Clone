
// async function getAccessToken() {
//     const data = new URLSearchParams({
//         grant_type: "client_credentials",
//         client_id: process.env.REACT_APP_SPOTIFY_API_KEY, // Ensure it's correctly loaded
//         client_secret: process.env.REACT_APP_SPOTIFY_API_SECRET // Ensure it's correctly loaded
//     });

//     const response = await axios.post("https://accounts.spotify.com/api/token", data.toString(), {
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         }
//     });

//     return response.data.access_token;
//     console.log("API Key:", process.env.REACT_APP_SPOTIFY_API_KEY);
//     console.log("API Secret:", process.env.REACT_APP_SPOTIFY_API_SECRET);

// }
import axios from "axios";

const getAccessToken = async () => {
    try {
        const response = await axios.get("http://localhost:5000/getSpotifyToken");
        return response.data.access_token;
    } catch (error) {
        console.error("Error fetching access token:", error.response?.data || error.message);
        return null;
    }
};

export default getAccessToken;