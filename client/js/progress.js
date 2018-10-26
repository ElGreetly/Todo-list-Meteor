import '../component/progress.html';
import { Todos } from '../../lib/collection.js';
Template.progress.helpers({
    progress: function(){
        var c = Todos.find({user: Meteor.user()._id, done: true}).fetch().length,
            todos = Todos.find({user: Meteor.user()._id}).fetch().length;
        return Math.floor(c / todos * 100); //calculating completion of todos list
    }
});