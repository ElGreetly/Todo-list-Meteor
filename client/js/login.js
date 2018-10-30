import '../component/login.html';

Template.login.events({
    // login submition and starting user session
    'submit #login-form': function(e){
        var username = e.target.username.value,
            password = e.target.password.value;
        Meteor.loginWithPassword(username, password, function(err){
            if(err){
                //handle errors
                Bert.alert(err.reason, 'danger', 'growl-top-right');
            }else{
                //if success
                Bert.alert('You are logged in!', 'success', 'growl-bottom-right');
            }
        });
        return false;
    }
});