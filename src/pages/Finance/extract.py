import requests
from bs4 import BeautifulSoup
import json

url = "https://munjalauto.com/downloads/"
base = "https://munjalauto.com"

response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
soup = BeautifulSoup(response.text, "html.parser")

notices = []
for a in soup.select("a[href$='.pdf']"):
    title = a.text.strip()
    file_link = a["href"]

    # Make absolute URL
    if not file_link.startswith("http"):
        file_link = base + file_link

    notices.append({
        "title": title,
        "description": title,
        "fileLink": file_link
    })

# Save as JSON for frontend
with open("downloads.json", "w", encoding="utf-8") as f:
    json.dump(notices, f, ensure_ascii=False, indent=2)

print("✅ downloads.json created")
