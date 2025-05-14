import requests

url = "http://localhost:5000/api/chat"
payload = {
    "message": "What does this Excel file contain?",
    "excelData": [["Column1", "Column2"], ["Value1", "Value2"]]
}

response = requests.post(url, json=payload)
print("Status Code:", response.status_code)
print("Response:", response.json())