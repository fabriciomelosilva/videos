const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Dados dos vídeos
const videos = [
  {
    "_id": "5c63d7e39aaf8c8c6718add5",
    "title": "Create your first content-type",
    "video": "https://s3-us-west-2.amazonaws.com/strapi-video-help/create-first-content-type.mp4",
    "preview": "https://s3-us-west-2.amazonaws.com/strapi-video-help/create-first-content-type.png",
    "published": true,
    "createdAt": "2019-02-13T08:40:03.487Z",
    "updatedAt": "2019-03-15T12:57:45.896Z",
    "__v": 0,
    "id": "5c63d7e39aaf8c8c6718add5",
    "order": 0
  },
  {
    "_id": "5c63e90db9ed73902fca5b10",
    "title": "Fill your content with data",
    "video": "https://s3-us-west-2.amazonaws.com/strapi-video-help/fill-data.mp4",
    "preview": "https://s3-us-west-2.amazonaws.com/strapi-video-help/fill-data.png",
    "published": true,
    "createdAt": "2019-02-13T09:53:17.967Z",
    "updatedAt": "2019-03-15T12:57:25.780Z",
    "__v": 0,
    "id": "5c63e90db9ed73902fca5b10",
    "order": 1
  },
  {
    "_id": "5c63e92fb9ed73902fca5b12",
    "title": "Fetch data through the API",
    "video": "https://s3-us-west-2.amazonaws.com/strapi-video-help/access-fetch-api.mp4",
    "preview": "https://s3-us-west-2.amazonaws.com/strapi-video-help/access-fetch-api.png",
    "published": true,
    "createdAt": "2019-02-13T09:53:51.280Z",
    "updatedAt": "2019-03-15T12:57:09.661Z",
    "__v": 0,
    "id": "5c63e92fb9ed73902fca5b12",
    "order": 2
  }
];

// Rota para listar vídeos
app.get('/videos', (req, res) => {
  res.json(videos);
});

// Rota para listar blog posts
app.get('/blog-posts', (req, res) => {
  const filePath = path.join(__dirname, 'blogPosts.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load blog posts' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

