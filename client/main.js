Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Template.layout_navigation.helpers({
    active: function (page) {
        if(Meteor.Router.page() === page)
            return true;
    }
});

Meteor.startup(function (){});

