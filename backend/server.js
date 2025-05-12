const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); // Make sure this line is included

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Load the GEMINI_API_KEY from the .env file
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post("/chat", async (req, res) => {
  const userInput = req.body.input;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: userInput }],
          },
        ],
      }
    );

    const reply =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No reply";
    res.json({ reply });
  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
