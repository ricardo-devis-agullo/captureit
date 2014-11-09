Template['menu'].helpers({
});

Template['menu'].events({
	"click #logout": function(event) {
		Meteor.logout();
	}
});
