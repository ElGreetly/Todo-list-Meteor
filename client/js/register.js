import '../component/register.html';

Template.register.events({
    'submit #signup-form': function(e){
        var username = e.target.username.value,
            password = e.target.password.value,
            passConfirm = e.target.passwordconfirmation.value;
        Accounts.createUser({
            username: username,
            password: password
        }, function(err){
            if(err){
                //handle errors
            }else{
                //if success
            }
        });
        return false;
    }
})