# Passport Upload

This application is designed to accept passport image uploads, process them through an OCR (Optical Character Recognition) API provided by Mindee, and extract key information such as the holder's Name, Document number, and passport expiry date.
The application is built using Node.js and utilizes Express.js to serve the front-end HTML page for uploading the passport image. The backend handles the file upload using Multer, then sends the uploaded image to the Mindee API for text extraction. After receiving the response from Mindee, the application processes the extracted information and returns it to the user in a structured JSON format.

**Features:**
Image Upload: The user can upload a passport image using a simple form.
OCR Processing: The uploaded image is sent to the Mindee API for Optical Character Recognition (OCR) to extract passport information.
Data Extraction: Key details like the holder’s name, surname, and passport expiry date are extracted and returned to the user.
API Integration: The application integrates with the Mindee API, a powerful OCR service, to read and extract data from passport documents.
**Workflow:**
User Uploads Passport: The user selects an image of their passport and submits it via a form.
File Handling: The image file is uploaded to the server, which temporarily stores it.
API Request: The server sends the image to the Mindee API for processing and analysis.
Data Extraction: The Mindee API processes the image and returns structured data with fields like name, surname, and expiry date.
Response to User: The server processes this data and sends it back to the user as a JSON response.


## Tech Stack

**Client:**  HTML, CSS

**Server:** Node, ExpressJS


## Run locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
## Authors

- [@lucky-quinn](https://github.com/lucky-quinn)
