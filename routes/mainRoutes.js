// Home Route
Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
    except: ['atSignIn', 'atSignUp', 'atForgotPassword']
});

Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});