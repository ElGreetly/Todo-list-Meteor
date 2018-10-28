import '../component/todo.html';
import { Todos } from '../../lib/collection.js';

var tid = null,
    did = null;

Template.todo.helpers({
    //send completed todos to the todo list
    doneTodos: () => {
        return Todos.find({user: Meteor.user()._id, done: true}, {sort: {sort: 1}});
    },
    //send uncompleted todos to the todo list
    todos: () => {
        return Todos.find({user: Meteor.user()._id, done: false}, {sort: {sort: 1}});
    }
});

Template.todo.events({
    //when start to drag todo element
    'drag .list-group-item': function(e){
        e.preventDefault();
        tid = this._id; //rereplaced item id
    },
    //for action when dragover an todo item
    'dragover .list-group-item': (e) => {
        e.preventDefault();
        e.target.style = 'border-top: 2px solid #333';
    },
    //action when drag leave an todo item
    'dragleave .list-group-item': (e) => {
        e.preventDefault();
        e.target.style = 'border-top: 1px solid #EEE';
    },
    //action on drop (replace) todo item new sorting
    'drop .list-group-item': function(e){
        e.preventDefault();
        e.target.style = 'border-top: 1px solid #EEE';
        did = this._id; //replaced item id
        Meteor.call('replace.todo', tid, did);
    },
    //handle removing todo item
    'click .fa-trash': function (e){
        let el = e.target.parentElement,
            itemId = this._id,
            animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
          $(el).addClass('animated fadeOutRight').one(animationEnd,
           function(){
               Meteor.call('remove.todo', itemId);
            });
    },
    //handle toggle between completion
    'click .fa-check': function (e){
        Meteor.call('check.todo', this._id);
    },
    //adding new todo item
    'submit form': (e) => {
        e.preventDefault();
        Meteor.call('insert.todo', e.target.querySelector('#new-todo').value);
        e.target.querySelector('#new-todo').value = "";
    }
});
