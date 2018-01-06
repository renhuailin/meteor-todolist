import { Meteor } from 'meteor/meteor';

import { Todos } from '../../../imports/collections/todos';
import { Images } from '../../../imports/collections/images';

Meteor.publish('todoList', function () {
  return Todos.find({});
});


Meteor.publish('files.images.all', function () {
  return Images.find().cursor;
});