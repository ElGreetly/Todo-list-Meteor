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
        let tsort = Todos.findOne({_id: tid}).sort,
            dsort = Todos.findOne({_id: did}).sort;
        Todos.update({_id: did}, {$set :{sort: tsort}});
        Todos.update({_id: tid}, {$set :{sort: dsort}});
    },
    //handle removing todo item
    'click .fa-trash': function (){
        Todos.remove({_id: this._id});
    },
    //handle toggle between completion
    'click .fa-check': function (){
        let isDone = Todos.findOne({_id: this._id}).done;
        Todos.update({_id: this._id}, {$set :{done: !isDone}});
    },
    //adding new todo item
    'submit form': (e) => {
        e.preventDefault();
        Todos.insert({
            text: e.target.querySelector('#new-todo').value,
            user: Meteor.user()._id,
            done: false,
            sort: todos = Todos.find({user: Meteor.user()._id}).fetch().length,
            createdAt: new Date()
        });
        e.target.querySelector('#new-todo').value = "";
    }
});
