Meteor.publish('messages', function() {
	return Messages.find();
});

Messages.allow({
	'insert': function() {
		return true;
	}
});

Meteor.publish('dbfiles', function() {
	return DBFiles.find();
});

DBFiles.allow({
	'insert': function() {
		return true;
	}
});


