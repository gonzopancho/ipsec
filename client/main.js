
var AppRouter = Backbone.Router.extend({
    routes: {
        'site/login' : 'login'
    },
    login: function () {
        console.log('login');
    }
});

Router = new AppRouter;

Meteor.startup(function (){
    Backbone.history.start({pushState: true});
});

