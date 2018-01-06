import { MongoObservable } from 'meteor-rxjs';

import { Todo } from '../models/todo';

// import { FilesCollection } from 'meteor/ostrio:files';

export const Todos = new MongoObservable.Collection<Todo>('todos');
