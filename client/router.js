Meteor.Router.add({
    '/': 'index',
    '/site/security': 'security',
    '/site/history': 'history',
    '*': 'error404'
});