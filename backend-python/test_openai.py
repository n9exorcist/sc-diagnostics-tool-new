import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

try:
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": "Say hello!"}]
    )
    print("Success! Response from OpenAI:")
    print(response.choices[0].message.content)
except Exception as e:
    print("Error calling OpenAI:", str(e))