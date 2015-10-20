var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    install_yo_rc: function() {
        this.config.save();
    },
    method1: function() {
        console.log('method 1 just ran');
    },
    method2: function() {
        console.log('method 2 just ran');
    }
});
