"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/2019-April-21', function (request, response) {
  var filePath = _path.default.join(__dirname, '../../client/build/index.html');

  _fs.default.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/\$OG_TITLE/g, 'Update - April 21, 2019');
    data = data.replace(/\$OG_DESCRIPTION/g, 'Easter update.');
    data = data.replace(/\$OG_URL/g, 'http://www.brotherblake.com/updates/2019-April-21');
    data = data.replace(/\$OG_SITE_NAME/g, 'BrotherBlake.com');
    var result = data.replace(/\$OG_IMAGE/g, 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/57774973_2122646601123669_6081006171613822976_o.jpg?_nc_cat=110&_nc_ht=scontent-lax3-2.xx&oh=9850df85dfa4142bd4f5ff28946dd399&oe=5D340213');
    console.log(data);
    response.send(result);
  });
});
router.get('/2019-April-14', function (request, response) {
  var filePath = _path.default.join(__dirname, '../../client/build/index.html');

  _fs.default.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/\$OG_TITLE/g, 'Update - April 14, 2019');
    data = data.replace(/\$OG_DESCRIPTION/g, 'The First Update!');
    data = data.replace(/\$OG_URL/g, 'http://www.brotherblake.com/updates/2019-April-14');
    data = data.replace(/\$OG_SITENAME/g, 'BrotherBlake.com');
    var result = data.replace(/\$OG_IMAGE/g, 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/57125788_2108946819160314_2488181134186250240_o.jpg?_nc_cat=109&_nc_ht=scontent-lax3-2.xx&oh=eca1772a9faf3795827799df1e344145&oe=5D3F5D3C');
    response.send(result);
  });
});
var _default = router;
exports.default = _default;