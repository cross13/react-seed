import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import App from '../shared/App';

const app = express();

app.use(cors());

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static('.build'));

const devClientSrc = 'http://localhost:3001/client.js';

const formatHTML = (appStr, helmet) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
    </head>
    <body>
      <div id="app">${appStr}</div>
      <script src="${devClientSrc}" async></script>
    </body>
  </html>
`;

app.get('*', (req, res) => {
  const appMarkup = renderToString(<App />);
  // you have to make sure to call renderStatic on server, or you'll get a memory leak.
  const helmet = Helmet.renderStatic();

  res.send(formatHTML(appMarkup, helmet));
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
