import axios from "axios";
import getAccessToken from "./accessToken";

const searchTrack = async (query) => {
    try {
        const token = await getAccessToken();
        console.log("Access Token:", token); // Log the access token for debugging
        const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`;

        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data.tracks?.items || []; // Return an empty array if no tracks found
    }
    catch (error) {
        console.error("API request filed:", error);
        return []; // Return an empty array in case of error
    }
};


export default searchTrack; // Export the function to be used in other components