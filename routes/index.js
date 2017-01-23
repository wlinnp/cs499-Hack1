var express = require('express');
var aws = require('aws-sdk'); // all amazon aws sdks
var constants = require('../Constants');
var router = express.Router();
var s3 = new aws.S3(); //specifically for s3

/*
CORS config
 */
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*
 Save downloaded image in folder <name>
 */
var imgDownloadPath = "./Img-Download/";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ShowList', function (req, res, next) {
    var params = {
        Bucket : constants.BUCKET,
        Delimiter : "",
        EncodingType : 'url',
        RequestPayer: 'requester'
    };

    s3.listObjects(params, function (err, data) {
        if (err) {
            console.error(err, err.stack);
        } else {
            var result = data;
            for (var i = 0; i < result.Contents.length; i++) {
                data.Contents[i].Url = constants.AMAZON_URL_PREFIX + data.Name + '/' + data.Contents[i].Key;
            }
        }
        res.send(data.Contents);
    });
});


module.exports = router;
