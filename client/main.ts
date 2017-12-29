import './imports/polyfills';
import { Meteor } from 'meteor/meteor';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './imports/app/app.module';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
    // this.rootPage = Meteor.user() ? ChatsPage : LoginPage;

    console.log(Meteor.user() ? "User Logged in" : "User not login.")
    if (Meteor.isProduction) {
        enableProdMode();
    }

    platformBrowserDynamic().bootstrapModule(AppModule);
});
