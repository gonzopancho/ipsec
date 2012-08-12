
LayoutRouter = Backbone.Router.extend({
    render: function (template, data) {
        document.getElementById('layout_content').innerHTML = "";
        
        template = template?template:"index";
        var frag = Meteor.ui.render(function () {
            return Template[template]?Template[template]():"";
        });
        document.getElementById('layout_content').appendChild(frag);
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

Template.layout_navigation.home = function () {
    return true;
};

Router = new AppRouter;

Meteor.startup(function (){
    Backbone.history.start({
        pushState: true
    });
});

