// ./src/index.js
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const temp_url = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6673324-9e0d-4071-8a63-c5fadab5efaa/wines_admin.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221220T130953Z&X-Amz-Expires=86400&X-Amz-Signature=979666e529d8d53fe2146f3a83961761e1f8d31435ac8a3bd3cbb49ba7041d1b&X-Amz-SignedHeaders=host&x-id=GetObject"

// defining the Express app
const app = express();

require('./routes/wine')(app);

// defining an array to work as the database (temporary solution)

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

var wines = []

async function initWinesDB() {
  try {
    const response = await fetch(temp_url, {
      method: 'GET'
    });
    const data = await response.json();
    wines = data.wines;
    console.log(data.wines.length + " wines in DB");
  }
  catch {
    console.error("Couldn't fetch wines");
  }
} 

initWinesDB();
  
// starting the server
app.listen(8080, () => {
  console.log('listening on port 8080');
});