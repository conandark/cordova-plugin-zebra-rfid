var exec = require('cordova/exec');

exports.init = function (arg0, success, error) {
    exec(success, error, 'zebraRfid', 'init', [arg0]);
};

exports.checkConnect = function (arg0, success, error) {
    exec(success, error, 'zebraRfid', 'check_connect', [arg0]);
};

exports.connect = function (arg0, success, error) {
    exec(success, error, 'zebraRfid', 'connect', [arg0]);
};

exports.disconnect = function (arg0, success, error) {
    exec(success, error, 'zebraRfid', 'disconnect', [arg0]);
};