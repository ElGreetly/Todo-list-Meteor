import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

Meteor.methods({
    'insert.todo'(text){
        check(text, String);
        Todos.insert({
            text: text,
            user: Meteor.user()._id,
            done: false,
            sort: todos = Todos.find({user: Meteor.user()._id}).fetch().length,
            createdAt: new Date()
        });
    },
    'check.todo'(id){
        check(id, String);
        let isDone = Todos.findOne({_id: id}).done;
        Todos.update({_id: id}, {$set :{done: !isDone}});
    },
    'remove.todo'(id){
        check(id, String);
        Todos.remove({_id: id});
    },
    'replace.todo'(tid, did){
        check(tid, String);
        check(did, String);
        let tsort = Todos.findOne({_id: tid}).sort,
            dsort = Todos.findOne({_id: did}).sort;
        Todos.update({_id: did}, {$set :{sort: tsort}});
        Todos.update({_id: tid}, {$set :{sort: dsort}});
    }
});
 
export const Todos = new Mongo.Collection('todos');