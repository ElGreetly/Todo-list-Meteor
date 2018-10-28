import '../component/navbar.html';

Template.navbar.helpers({
    showLogin: function() {
      return Session.get('showLogin');
    }
});

Template.navbar.events({
    //showing register form based on showLogin value if false
    'click .show-register': function(event) {
        event.preventDefault();
        Session.set('showLogin', false);
    },
    //showing login form based on showLogin value if true
    'click .show-login': function(event) {
        event.preventDefault();
        Session.set('showLogin', true);
    },
    //loging out function
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout(function(err){
            if(err){

            }else{

            }
        });
    }
});