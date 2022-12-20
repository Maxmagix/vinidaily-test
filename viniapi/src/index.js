const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const temp_url = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6673324-9e0d-4071-8a63-c5fadab5efaa/wines_admin.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221220T130953Z&X-Amz-Expires=86400&X-Amz-Signature=979666e529d8d53fe2146f3a83961761e1f8d31435ac8a3bd3cbb49ba7041d1b&X-Amz-SignedHeaders=host&x-id=GetObject"

const app = express();

app.use(bodyParser.json());

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

app.get('/api/wine', (req, res) => {
  const name = req.query.name.toLowerCase();
  if (!name)
    return res.send('No name provided');
  if (!wines)
    return res.send('No wines loaded');
  const found_wines = wines.filter(wine =>
    wine.name.toLowerCase().includes(name) ||
    wine.appellation.toLowerCase().includes(name) ||
    wine.grapeVarieties.toLowerCase().includes(name) ||
    wine.region.toLowerCase().includes(name)
  );
  console.log(found_wines?.length);
  res.send(found_wines);
})

app.listen(8080, () => {
  console.log('listening on port 8080');
});