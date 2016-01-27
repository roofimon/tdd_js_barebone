'use strict';

module.exports = function (config) {
    config.set({
        frameworks:['jasmine'],
        browsers:['PhantomJS'],
        files:[
            'tennisRules.js',
            'counter.js',
            'specs/unit/*.js'
        ]
    });
};
