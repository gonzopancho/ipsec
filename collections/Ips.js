Ips = new Meteor.Collection("ips");

Ips.allow({
    insert: function (userId, doc) {
        // the user must be logged in, and the document must be owned by the user
        return (userId && doc.user === userId && isValidCIDR(doc.ip));
    },
    update: function (userId, doc, fields, modifier) {
        // can only change your own documents
        return doc.user === userId;
    },
    remove: function (userId, doc) {
        // can only remove your own documents
        console.log(userId, doc);
        return doc.user === userId;
    }
});

function isValidCIDR(cidr) {
    var patt = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/(\d|[1-2]\d|3[0-2]))$/;
    return patt.test(cidr);
}