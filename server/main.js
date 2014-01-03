Meteor.publish('ips', function () {
    return Ips.find({user: this.userId});
});

Facts.setUserIdFilter(function (userId) {
  var user = Meteor.users.findOne(userId);
  return user && user.admin;
});

Meteor.startup(function () {
    // code to run on server at startup
});

