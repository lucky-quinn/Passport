const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const axios = require('axios'); 
const FormData = require('form-data');

// Define the router
const app = express();
app.use(express.static('home')); 

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '/home/home.html'));
});

app.post('/upload', upload.single('passport'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        // Set up FormData to send file to the API
        const form = new FormData();
        form.append('document', fs.createReadStream(req.file.path));

        // API URL and key
        const apiUrl = 'https://api.mindee.net/v1/products/mindee/passport/v1/predict';
        const apiKey = 'bd0cb15e13029f53a5cf777de82751eb';  //TEMP KEY

        // Send the file to the Mindee API using axios
        const apiResponse = await axios.post(apiUrl, form, {
            headers: {
                ...form.getHeaders(),
                'Authorization': `Token ${apiKey}`,
            },
        });
        const data = apiResponse.data.document.inference.prediction;
        const extractedData = {
            name: data.given_names[0].value,
            documentnum: data.id_number.value,
            expiryDate: data.expiry_date.value,
        };
        console.log(extractedData) //server side debugging

        // Respond with the extracted data
        res.json(extractedData);

    } catch (error) {
        console.error('Error processing image:', error);
        res.status(500).json({ error: 'Failed to process image.' });
    }
});

// Start the server
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});