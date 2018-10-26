import { Template } from 'meteor/templating';

import './main.html';
import './js/todo';
import './js/navbar';
import './js/progress';
import './js/register';
import './js/login';

Template.body.helpers({
    showLogin: function() {
      return Session.get('showLogin');
    }
});
