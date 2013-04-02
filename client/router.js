Meteor.Router.add({
    '/': 'index',
    '/site/security': 'security',
    '/site/history': 'history',
    '*': 'error404'
});

Meteor.Router.filters({
    'checkLoggedIn': function(page) {
        if (Meteor.loggingIn()) {
            return 'loading';
        } else if (Meteor.user()) {
            if(page == 'login')
                return 'index';
            return page;
        } else {
            return 'login';
        }
    }
});

Meteor.Router.filter('checkLoggedIn');