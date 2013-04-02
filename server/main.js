Meteor.publish('ips', function () {
    return Ips.find({user: this.userId});
});

Meteor.startup(function () {
    // code to run on server at startup
});

