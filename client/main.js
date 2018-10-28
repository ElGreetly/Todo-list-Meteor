import { Template } from 'meteor/templating';

import './main.html';
import './js/todo';
import './js/navbar';
import './js/progress';
import './js/register';
import './js/login';

Meteor.startup(() => {
  Session.set('showLogin', false);
});

Template.body.helpers({
    showLogin: function() {
      return Session.get('showLogin');
    }
});
