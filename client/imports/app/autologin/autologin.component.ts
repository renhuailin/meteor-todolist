import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import { Todos } from '../../../../imports/collections/todos';
import { Todo } from '../../../../imports/models/todo';

@Component({
    selector: 'auto-login',
    templateUrl: 'auto-login.html',
    styleUrls: ['auto-login.scss']
})
export class AutoLoginComponent implements OnInit, OnDestroy {
    ngOnInit() {
        Accounts.callLoginMethod(
            {
                methodArguments: [
                    {
                        user: { username: "renhuailin" },
                        password: "1q2w3e4r"
                        // custom: "example",
                        // weixin_uid: "fdsfasd34567890-=654dfghjkl"
                    }],
                validateResult: function (result) {
                    //Custom validation of login on client side can go here
                },
                userCallback: function (error) {
                    if (error) {
                        console.log(error);
                    }
                    //Login happened in pop-up. Close the window after success.
                    console.log("Login success!");
                    console.log("User id =  " + Meteor.userId());
                }
            });

    }
    ngOnDestroy() {

    }
    removeTodo(_id: string) {
        Meteor.call('removeTodo', _id);
    }

    login() {
        // console.log("Call server login in browser.");
        // Meteor.call('doLogin');
    }
}
