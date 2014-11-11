Template['captures'].helpers({
	snapshots: function() {
		return DBFiles.find({}, {sort: {created: -1}, limit: 3});
	}
});

Template['captures'].events({
});
