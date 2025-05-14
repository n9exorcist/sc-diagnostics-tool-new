from flask import Flask, request, jsonify
from dotenv import load_dotenv

import openai
import os
import ollama


app = Flask(__name__)

load_dotenv()  # This loads the .env file
# Set your OpenAI API key from environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")
print("OpenAI API Key:", openai.api_key)

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json
    message = data.get("message")
    excel_data = data.get("excelData")

    if not message or not excel_data:
        return jsonify({"error": "Missing message or excelData"}), 400

    try:
        # Format prompt
        limited_excel_data = excel_data[:10]
        prompt = f"""
You are a supply chain analyst assistant. The user uploaded an Excel file with this data:
{str(limited_excel_data)}

User asked: "{message}"

Answer clearly.
"""

        # Call Ollama
        ollama_response = ollama.generate(model="mistral", prompt=prompt)

        reply = ollama_response.get("response", "Bot: Sorry, I couldn't process that.")

        return jsonify({"reply": reply})
    except Exception as e:
        print("Error calling Ollama:", str(e))
        return jsonify({"error": "Failed to get AI response"}), 500

@app.route("/")
def home():
    return jsonify({"status": "Backend is running", "routes": ["/api/chat"]})