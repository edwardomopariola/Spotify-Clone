import axios from "axios";

const client_id = "693a3b52b21d4ee8bcdc44617f629321";
const client_secret = "8e4b1d7609b14df0b03d17ff7d328886";
// const redirectURI = "http://localhost:3000/callback";
// const authURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&scope=user-read-private%20user-read-email`;

async function getAccessToken() {   // Function to get the access token
    const response = await axios.post("https://accounts.spotify.com/api/token",{
        grant_type: "client_credentials",  // Grant type for client credentials
        client_id: "693a3b52b21d4ee8bcdc44617f629321",
        client_secret: "8e4b1d7609b14df0b03d17ff7d328886",
    }, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        },
      
    );
    
    return response.data.access_token;
}

export default getAccessToken;  // Export the function 
