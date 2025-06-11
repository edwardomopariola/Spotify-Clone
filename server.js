const PORT = process.env.PORT || 5000;  // Set the port for the server, defaulting to 5000 if not specified in environment variables
const express = require("express");   // Importing required modules
const cors = require("cors");  // Importing CORS middleware for handling cross-origin requests
const axios = require("axios");  // Importing axios for making HTTP requests
const path = require("path");  // Importing path module for serving static files
require("dotenv").config();  // Load environment variables from .env file

const app = express();  // Create an instance of an Express application


// Use CORS middleware to allow requests from localhost:3000 and Heroku frontend
app.use(cors({
    origin: ["http://localhost:3000", "https://spotify-clone-fcea296113be.herokuapp.com"],
}));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Root endpoint to check if the server is running
app.get("/", (req, res) => {
    res.json("Welcome to the Spotify API Server");
});

// Endpoint to get the Spotify access token
app.get("/getSpotifyToken", async (req, res) => {
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

// Handle React routing, return all requests to React app
app.get("/user/:id", (req, res) => {
    res.sendFile(`User ID: ${req.params.id}`)
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));