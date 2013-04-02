Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Template.layout_navigation.helpers({
    active: function (page) {
        if(Meteor.Router.page() === page)
            return true;
    }
});

Template.layout_navigation.events({
    'click #logout': function () {
        Meteor.logout();
    }
});


Meteor.startup(function (){});

