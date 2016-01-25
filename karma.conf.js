'use strict';

module.exports = function (config) {
    config.set({
        frameworks:['jasmine'],
        browsers:['PhantomJS'],
        files:[
            'specs/unit/*.js'
        ]
    });
};
