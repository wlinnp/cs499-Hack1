/**
 * Created by waiphyo on 1/23/17.
 */
const MAIN_ROOT = __dirname;
const PATH_SEPARATOR = '/';
const cs499Bucket = 'cs499-hack1';
const contentType = 'image/png';
const acl = 'public-read';
const url_prefix = 'https://s3-us-west-2.amazonaws.com/';
const filePathPrefix = '';
const folderPath = '/home/waiphyo/Pictures/';
module.exports = {
    MAIN_ROOT : MAIN_ROOT,
    PATH_SEPARATOR : PATH_SEPARATOR,
    BUCKET : cs499Bucket,
    CONTENT_TYPE : contentType,
    ACL : acl,
    AMAZON_URL_PREFIX : url_prefix,
    FILE_PATH_PREFIX : filePathPrefix,
    FOLDER : folderPath
}