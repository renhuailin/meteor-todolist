import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import { Todos } from '../../../../imports/collections/todos';
import { Todo } from '../../../../imports/models/todo';
import { Images } from '../../../../imports/collections/images';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.html',
    styleUrls: ['todo-list.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
    todos: Observable<Todo[]>;
    todoListSubscription: Subscription;

    images: Observable<any>;
    imagesSubscription: Subscription;

    checked: boolean;
    ngOnInit() {
        console.log("User id =  " + Meteor.userId());
        this.todoListSubscription = MeteorObservable.subscribe('todoList').subscribe(() => {
            this.todos = Todos.find();
        });

        this.imagesSubscription = MeteorObservable.subscribe('files.images.all').subscribe(
            () => {
                this.images = Images.find().cursor.map(image => {
                    image.link = Images.link(image);
                    // console.log(image.link);
                    return image;
                });
            }
        );

    }
    ngOnDestroy() {
        if (this.todoListSubscription) {
            this.todoListSubscription.unsubscribe();
        }

        if (this.imagesSubscription) {
            this.imagesSubscription.unsubscribe();
        }
    }
    removeTodo(_id: string) {
        Meteor.call('removeTodo', _id);
    }

    login() {
        console.log("Call server login in browser.");
        Meteor.call('doLogin');
    }

    onFileChange(e: any) {
        console.log(event);
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            // We upload only one file, in case
            // there was multiple files selected
            var file = e.currentTarget.files[0];
            if (file) {
                var uploadInstance = Images.insert({
                    file: file,
                    streams: 'dynamic',
                    chunkSize: 'dynamic'
                }, false);

                uploadInstance.on('end', function (error, fileObj) {
                    if (error) {
                        window.alert('Error during upload: ' + error.reason);
                    } else {
                        window.alert('File "' + fileObj.name + '" successfully uploaded');
                    }
                });

                uploadInstance.start();
            }
        }
    }
}

