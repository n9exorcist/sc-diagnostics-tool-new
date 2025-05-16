from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
import openai
import os
import ollama


# Load environment variables
load_dotenv()
app = Flask(__name__)
CORS(app)  # This enables CORS for all routes

# OpenAI setup (optional if using Ollama)
openai.api_key = os.getenv("OPENAI_API_KEY")
print("OpenAI API Key:", openai.api_key)



@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json
    print("Received data:", data)  # 👈 Log full incoming request
    message = data.get("message")
    excel_data = data.get("excelData")

    if not message or not excel_data:
        return jsonify({"error": "Missing message or excelData"}), 400

    print("Message:", message)
    print("Excel data sample:", excel_data[:5])
    
    try:
        # Limit to first 10 rows to avoid token overflow
        limited_excel_data = excel_data[:10]

        # Format as table for LLM
        table_str = "\n".join([" | ".join(map(str, row)) for row in limited_excel_data])

        prompt = f"""
You are a supply chain analyst assistant. You have access to the following KPI benchmarking data:

| Function | KPI | Client Value | Q1 | Median | Q3 |
{table_str}

User asked: "{message}"

Answer clearly and specifically. If the question cannot be answered from the data provided, say so.
"""
        print("Prompt sent to LLM:\n", prompt)
        # Call local model
        ollama_response = ollama.generate(model="mistral", prompt=prompt)
        reply = ollama_response.get("response", "Bot: Sorry, I couldn't process that.")

        return jsonify({"reply": reply})

    except Exception as e:
        print("Error calling Ollama:", str(e))
        return jsonify({"error": "Failed to get AI response"}), 500


@app.route("/")
def home():
    return jsonify({"status": "Backend is running", "routes": ["/api/chat"]})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
