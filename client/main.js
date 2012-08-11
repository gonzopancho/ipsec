
var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'security': 'security',
        'history': 'history',
        'logout': 'logout'
    },
    logout: function () {
        console.log('logout');
    },
    index: function () {
        console.log('index');
        Session.set('content', 'index');
    },
    security: function () {
        console.log('security');
        Session.set('content', 'security');
    },
    history: function () {
        console.log('history');
        Session.set('content', 'history');
    }
});

Router = new AppRouter;

Template.content.content_is = function (data) {
    return Session.equals('content', data);
};

Meteor.startup(function (){
    Backbone.history.start({
        pushState: true
    });
});

