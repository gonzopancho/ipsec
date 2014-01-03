Router.configure({
    layoutTemplate: 'layout',
    //FIXME: a bug is invalidating yieldTemplates
    //notFoundTemplate: 'error404',
    yieldTemplates: {
        navbuttons: {
            to: 'navbuttons'
        }
    },
    before: function () {
        if (Meteor.user())
            return;

        if (Router.current().route.name === 'login')
            return;

        Router.go('login');
        return this.stop();
    }
});

Router.map(function () {
    this.route('login', {
        path: 'login',
        before: function () {
            if (!Meteor.user())
                return;

            Router.go('index');
            return this.stop();
        },
        yieldTemplates: null
    });

    this.route('index', {
        path: '/'
    });

    this.route('security', {
        path: '/site/security'
    });

    this.route('history', {
        path: '/site/history'
    });

    //FIXME: workaround until notFoundTemplate is fixed
    this.route('error404', {
        path: '*'
    });
});