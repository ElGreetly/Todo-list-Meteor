import '../component/register.html';

Template.register.events({
    'submit #signup-form': function(e){
        var username = e.target.username.value,
            password = e.target.password.value,
            passConfirm = e.target.passwordconfirmation.value;
            if(isNotEmpty(trimInput(username)) 
            && isUsername(username)
            && isNotEmpty(trimInput(password))
            && isNotEmpty(trimInput(passConfirm))
            && areValidPasswords(password, passConfirm)){
                Accounts.createUser({
                    username: username,
                    password: password
                }, function(err){
                    if(err){
                        //handle errors
                        Bert.alert(err.reason, 'danger', 'growl-top-right');
                    }else{
                        //if success
                        Bert.alert('Account created! you are logged in!', 'success', 'growl-top-right');
                    }
                });
            }
        return false;
    }
});
var trimInput = function(val){
    return val.replace(/^\s*|\s*$/g, "");
    },
    isNotEmpty = function(val){
        if(val && val !== ""){
            return true;
        }
        Bert.alert('Please fill in all fields', 'danger', 'growl-top-right');
        return false;
    },
    isUsername = function(val){
        let filter = /^[a-z0-9]+$/i;
        if(filter.test(val)){
            return true;
        }
        Bert.alert('Username must be small alphabets or numbers', 'danger', 'growl-top-right');
        return false;
    },
    isValidPassword = function(password){
        if(password.length < 6){
            Bert.alert('Password must be more than or equal to 6 chars', 'danger', 'growl-top-right');
            return false;
        }
        return true;
    },
    areValidPasswords = function(password, passConfirm){
        if(!isValidPassword(password)){
            return false;
        }
        if(password !== passConfirm){
            Bert.alert('Passwords not match', 'danger', 'growl-top-right');
            return false;
        }
        return true;
    };
