import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();

router.get('/2019-April-21', function(request, response) {
  const filePath = path.join(__dirname, '../../client/build/index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Update - April 21, 2019');
    data = data.replace(/\$OG_DESCRIPTION/g, 'Easter update.');
    data = data.replace(
      /\$OG_URL/g,
      'http://www.brotherblake.com/updates/2019-April-21'
    );
    const result = data.replace(
      /\$OG_IMAGE/g,
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/57774973_2122646601123669_6081006171613822976_o.jpg?_nc_cat=110&_nc_ht=scontent-lax3-2.xx&oh=9850df85dfa4142bd4f5ff28946dd399&oe=5D340213'
    );
    console.log(data);
    response.send(result);
  });
});

router.get('/2019-April-14', function(request, response) {
  const filePath = path.join(__dirname, '../../client/build/index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Update - April 14, 2019');
    data = data.replace(/\$OG_DESCRIPTION/g, 'The First Update!');
    data = data.replace(
      /\$OG_URL/g,
      'http://www.brotherblake.com/updates/2019-April-14'
    );
    const result = data.replace(
      /\$OG_IMAGE/g,
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/57125788_2108946819160314_2488181134186250240_o.jpg?_nc_cat=109&_nc_ht=scontent-lax3-2.xx&oh=eca1772a9faf3795827799df1e344145&oe=5D3F5D3C'
    );
    response.send(result);
  });
});

export default router;
