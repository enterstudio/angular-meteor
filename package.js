Package.describe({
    summary: "AngularJs for Meteor"
});

Package.on_use( function(api) {
    api.use('deps');

    api.add_files(['angular.min.js','ngMeteor.js'], 'client');
});