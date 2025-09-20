import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

BASE_URL = "https://munjalauto.com/downloads/"
DOWNLOAD_DIR = "reports"  # root folder for downloads

# Create base folder if not exists
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

# Fetch page
headers = {"User-Agent": "Mozilla/5.0"}
response = requests.get(BASE_URL, headers=headers, timeout=15)
response.raise_for_status()

soup = BeautifulSoup(response.text, "html.parser")

pdf_links = []
for a in soup.select("a[href$='.pdf']"):
    href = a.get("href")
    if not href:
        continue
    file_url = urljoin(BASE_URL, href)
    title = a.get_text(strip=True)

    # Parse path → extract /YYYY/MM/
    parsed = urlparse(file_url).path.split("/")
    year, month = None, None
    for i, part in enumerate(parsed):
        if part.isdigit() and len(part) == 4:  # year like 2025
            year = part
            if i + 1 < len(parsed) and parsed[i + 1].isdigit():
                month = parsed[i + 1]
            break

    if not year or not month:
        continue  # skip malformed links

    pdf_links.append({
        "title": title,
        "file_url": file_url,
        "year": year,
        "month": month,
    })

# Download files into folder structure
for item in pdf_links:
    folder_path = os.path.join(DOWNLOAD_DIR, item["year"], item["month"])
    os.makedirs(folder_path, exist_ok=True)

    filename = os.path.basename(item["file_url"].split("?")[0])  # clean filename
    filepath = os.path.join(folder_path, filename)

    print(f"⬇️ Downloading {item['title']} → {filepath}")
    try:
        r = requests.get(item["file_url"], headers=headers, timeout=30)
        r.raise_for_status()
        with open(filepath, "wb") as f:
            f.write(r.content)
    except Exception as e:
        print(f"❌ Failed to download {item['file_url']}: {e}")

print("✅ All files downloaded into 'reports/<year>/<month>/' folders.")
