Template.security.helpers({
    networks: function () {
        return Ips.find().fetch();
    }    
});

Template.security.events({
    'click #add-rule': function (e, t) {
    Ips.insert({ip: t.find('input').value});
    }
});