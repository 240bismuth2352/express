var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
request('https://yesno.wtf/assets/no/4-122be48db47678331dbef3dd6ac6ff56.gif', function (error, response, body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
res.json(data);
}
});
})

module.exports = router;