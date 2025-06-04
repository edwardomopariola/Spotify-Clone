const PORT = 5000;  // Port number for the server to listen on
const express = require("express");   // Importing required modules
const cors = require("cors");  // Importing CORS middleware for handling cross-origin requests
const axios = require("axios");  // Importing axios for making HTTP requests
require("dotenv").config();  // Load environment variables from .env file

const app = express();  // Create an instance of an Express application

// Use CORS middleware to allow requests from localhost:3000
app.use(cors({
    origin: "http://localhost:3000",  // Allow requests from your React frontend
}));

app.get("/", (req, res) => {  // Root endpoint to check if the server is running
    res.json("Welcome to the Spotify API Server");
});

app.get("/getSpotifyToken", async (req, res) => {   // Endpoint to get the Spotify access token
    try {
        const authHeader = `Basic ${Buffer.from(
            process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
        ).toString("base64")}`;

        const data = new URLSearchParams({
            grant_type: "client_credentials",
        });

        const response = await axios.post("https://accounts.spotify.com/api/token", data.toString(), {
            headers: {
                "Authorization": authHeader,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        res.json(response.data);  // Sending the access token back to the client
    } catch (error) {
        console.error("Error fetching token:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));