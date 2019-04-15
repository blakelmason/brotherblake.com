import express from 'express';
import updates from './updates.routes.js';
import path from 'path';
import fs from 'fs';

const router = express.Router();

router.get('/', function(request, response) {
  const filePath = path.join(__dirname, '../../client/build/index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }

    // replace the special strings with server generated strings
    data = data.replace(/\$DESCRIPTION/g, 'Gospel Insights and Musings');
    data = data.replace(/\$OG_TITLE/g, 'BrotherBlake.com');
    data = data.replace(/\$OG_DESCRIPTION/g, 'Gospel Insights and Musings');
    data = data.replace(/\$OG_URL/g, 'http://www.brotherblake.com');
    data = data.replace(/\$OG_SITE_NAME/g, 'BrotherBlake.com');
    const result = data.replace(
      /\$OG_IMAGE/g,
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/56781100_2108946195827043_1700182840144035840_o.jpg?_nc_cat=105&_nc_ht=scontent-lax3-2.xx&oh=e14dbefa96c805f456cc8a879f614598&oe=5D4E12A9'
    );
    response.send(result);
  });
});

router.use('/updates', updates);

export default router;
