Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Template.navbuttons.helpers({
    active: function (page) {
        if(Router.current().route.name === page)
            return true;
    }
});

Template.navbuttons.events({
    'click #logout': function () {
        Meteor.logout();
    }
});


Meteor.startup(function (){});

