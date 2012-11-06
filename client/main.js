
LayoutRouter = Backbone.Router.extend({
    render: function (template, data) {
        document.getElementById('layout_content').innerHTML = "";
        
        template = template?template:"index";
        if(Template[template] === undefined) throw "Invalid template name: " + template;
        var frag = Meteor.render(function () {
            //return Template[template]?Template[template]():"";
            return Template[template]();
        });
        document.getElementById('layout_content').appendChild(frag);
        Session.set('view', template);
    }
});

AppRouter = LayoutRouter.extend({
    routes: {
        '': 'index',
        //'login': 'login',
        //'logout': 'logout',
        'site/security': 'security',
        'site/history': 'history',
        '*path': 'error404'
    },
    index: function () {
        this.render('index');
    },
    /*login: function () {
        console.log('login');
    },*/
    /*logout: function () {
        console.log('logout');
        this.navigate('index');
    },*/
    security: function () {
        this.render('security');
    },
    history: function () {
        this.render('history');
    },
    error404: function () {
        this.render('error404');
    }
});

Template.layout_navigation.view_is = function (view) {
    return Session.equals('view', view);
};

Router = new AppRouter;

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.startup(function (){
    Backbone.history.start({
        pushState: true
    });
});

