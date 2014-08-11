var bundle = require('ts-bundle');

module.exports = function(grunt) {
    grunt.registerMultiTask('bundle', 'Runs ts-bundle', function () {
        bundle(this.data, this.async());
    });
};
