import '../component/login.html';

Template.login.events({
    // login submition and starting user session
    'submit #login-form': function(e){
        var username = e.target.username.value,
            password = e.target.password.value;
        Meteor.loginWithPassword(username, password, function(err){
            if(err){
                //handle errors
            }else{
                //if success
            }
        });
        return false;
    }
});