const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Load environment variables
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  const { message, excelData } = req.body;

  console.log("📥 Received chat request");
  console.log("User message:", message);

  try {
    // ✅ Dummy response during development
    const dummyResponse = {
      choices: [
        {
          message: {
            content:
              "Bot: Based on your file, there are approximately 58 rows of data.",
          },
        },
      ],
    };

    res.json({ reply: dummyResponse.choices[0].message.content });
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ error: "Failed to get AI response" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
