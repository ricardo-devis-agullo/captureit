Template['login'].helpers({
});

Template['login'].events({
});

Template['login'].rendered = function () {
	($('#at-field-password').parents('.at-input')).insertAfter($('#at-field-username_and_email').parents('.at-input'));
	($('#at-field-password_again').parents('.at-input')).insertAfter($('#at-field-password').parents('.at-input'));
	$('.error').hide();
};

