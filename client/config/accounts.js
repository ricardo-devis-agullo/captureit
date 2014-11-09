Meteor.startup(function(){
	AccountsTemplates.removeField('email');
	AccountsTemplates.addFields([
		{
			_id: "username",
			type: "text",
			displayName: "username",
			required: true,
			minLength: 5,
	  	},
	  	{
			_id: 'email',
			type: 'email',
			required: true,
			displayName: "email",
			re: /.+@(.+){2,}\.(.+){2,}/,
			errStr: 'Invalid email',
	  	}
	]);	
	AccountsTemplates.configureRoute('signIn', {
	    name: 'signin',
	    path: '/login',
	    template: 'login',
		redirect: function(){
			var user = Meteor.user();
			if (user)
				Router.go('/');
		}
	});
	AccountsTemplates.init();
});
