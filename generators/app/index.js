var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this,arguments);
            // This makes `appname` a required argument.
            this.argument('appname', { type: String, required: true });
            // And you can then access it later on this way; e.g. CamelCased
           // this.appname = _.camelCase(this.appname);  
    },
    
    test: function () {
        this.destinationRoot(this.appname);
        
        this.fs.copyTpl(
        this.templatePath(),
        this.destinationPath(),
            { title: this.appname }
        );
    }
});
