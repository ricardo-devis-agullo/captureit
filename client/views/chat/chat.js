Template.chat.rendered = function () {
	var chatWindow = document.getElementById("chat-messages");
	chatWindow.scrollTop = chatWindow.scrollHeight;
};

Template['chat'].helpers({
	messages: function() { 
		return Messages.find({}, { sort: { time: 1 }});
	}
});

Template['chat'].events = {
	"keydown #chat-input": function(event) {
		if (event.which == 13) {
			var name = Meteor.user().username;
			var message = document.getElementById('chat-input');

			if (name.value != '' && message.value != '') {
				Messages.insert({
					name: name,
					message: message.value,
					time: Date.now()
				});
				message.value = '';
			}
		}
	},
	"click #chat-send": function(event) {
		var name = Meteor.user().username;
		var message = document.getElementById('chat-input');

		if (name.value != '' && message.value != '') {
			Messages.insert({
				name: name,
				message: message.value,
				time: Date.now()
			});
			message.value = '';
		}
	}
}
