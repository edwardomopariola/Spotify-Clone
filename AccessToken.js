import axios from "axios";

const clientID = "693a3b52b21d4ee8bcdc44617f629321";
const clientSecret = "8e4b1d7609b14df0b03d17ff7d328886";
const redirectURI = "http://localhost:3000/callback";
// const authURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&scope=user-read-private%20user-read-email`;

async function getAccessToken() {   // Function to get the access token
    const response = await axios.get("https://accounts.spotify.com/api/token", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
   
        clientId: "693a3b52b21d4ee8bcdc44617f629321",
        clientSecret: "8e4b1d7609b14df0b03d17ff7d328886",
    });
    
    if (!response.ok) {  // Check if the response is ok 
        console.error('Error fetching access token:', response.statusText);
        throw new Error('Failed to fetch access token');
    }
    
    const data = await response.json();   // Parse the JSON res ponse
    if (!data.accessToken) {
        throw new Error('Access token not found in response');
    }
    return data.accessToken;
}

export default getAccessToken;  // Export the function 