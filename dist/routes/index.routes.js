"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _updatesRoutes = _interopRequireDefault(require("./updates.routes.js"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', function (request, response) {
  var filePath = _path.default.join(__dirname, '../../client/build/index.html'); // read in the index.html file


  _fs.default.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    } // replace the special strings with server generated strings


    data = data.replace(/\$TITLE/g, 'BrotherBlake.com');
    data = data.replace(/\$DESCRIPTION/g, 'Gospel Insights and Musings');
    data = data.replace(/\$OG_TITLE/g, 'BrotherBlake.com');
    data = data.replace(/\$OG_DESCRIPTION/g, 'Gospel Insights and Musings');
    data = data.replace(/\$OG_URL/g, 'http://www.brotherblake.com');
    data = data.replace(/\$OG_SITE_NAME/g, 'BrotherBlake.com');
    var result = data.replace(/\$OG_IMAGE/g, 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/56781100_2108946195827043_1700182840144035840_o.jpg?_nc_cat=105&_nc_ht=scontent-lax3-2.xx&oh=e14dbefa96c805f456cc8a879f614598&oe=5D4E12A9');
    response.send(result);
  });
});
router.use('/updates', _updatesRoutes.default);
var _default = router;
exports.default = _default;