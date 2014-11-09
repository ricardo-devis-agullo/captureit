Template['upload'].helpers({
});

Template['upload'].events({
	'submit form': function(e, template) {
		e.preventDefault();
		var file = template.find('#file').files[0];
		var meteoruser = Meteor.user().username;
		var reader = new FileReader();
		reader.onload = function(e) {
			DBFiles.insert({src:e.target.result, username: meteoruser});
		};
		reader.readAsDataURL(file);
	}
});
