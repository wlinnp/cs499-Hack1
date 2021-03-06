/**
 * Created by waiphyo on 1/23/17.
 */
var aws = require('aws-sdk'); // all amazon aws sdks
var constants = require('./Constants');
var s3 = new aws.S3(); //specifically for s3
var fs = require('fs');

var uploadToS3 = function (filePath, fileName) {
    fs.readFile(filePath + fileName, function (err, data) {
        var params = {
            Bucket: constants.BUCKET,
            Key: constants.FILE_PATH_PREFIX + fileName,
            Body: data,
            ACL: constants.ACL//,
            //ContentType: contentType
        };
        s3.putObject(params, function (err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
                console.log('upload to s3 succeeded for ' + fileName);
            }
        });
    });
};

var deleteObject = function(fileName) {
    var params = {
        Bucket: constants.BUCKET,
        Key: constants.FILE_PATH_PREFIX + fileName
    };
    s3.deleteObject(params, function(err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred
        } else {
            console.log(data);
        }
    });
};

module.exports = {
    uploadToS3 : uploadToS3,
    deleteObject : deleteObject
};

