import axios from "axios";
import getAccessToken from "./AccessToken"; // Ensure correct import case

async function searchTrack(query) {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        throw new Error("Access token not found");
    }

    console.log("Access Token:", accessToken); // Debugging

    const response = await axios.get("https://api.spotify.com/v1/search", {
        params: { q: encodeURIComponent(query), type: "track", limit: 10 },
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response.data.tracks.items;
}

export default searchTrack;