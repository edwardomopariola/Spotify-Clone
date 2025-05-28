const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/getSpotifyToken", async (req, res) => {
    try {
        console.log("Client ID:", process.env.SPOTIFY_CLIENT_ID);
        console.log("Client Secret:", process.env.SPOTIFY_CLIENT_SECRET);

        const data = new URLSearchParams({
            grant_type: "client_credentials",
            client_id: process.env.SPOTIFY_CLIENT_ID,
            client_secret: process.env.SPOTIFY_CLIENT_SECR

        });

        const response = await axios.post("https://accounts.spotify.com/api/token", data.toString(), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
// This server provides an endpoint to get the Spotify access token.
// You can call this endpoint from your React app to get the token securely.