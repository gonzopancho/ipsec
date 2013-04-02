Template.security.created = function () {
    Meteor.subscribe("ips");
};

Template.security.helpers({
    networks: function () {
        return Ips.find().fetch();
    }    
});

Template.security.events({
    'click #add-rule': function (e, t) {
        var ip = t.find('input').value;
        if (!isValidCIDR(ip))
            return;
        Ips.insert({
            user: Meteor.userId(),
            ip: ip
        });
    },
    'click .remove': function (e, t) {
        Ips.remove({
            _id: this._id
        });
    }
});