import ollama

response = ollama.generate(model="mistral", prompt="Explain what this file contains:\n\nPlan | Inventory Turns | 8.03 | days | ...")
print(response["response"])