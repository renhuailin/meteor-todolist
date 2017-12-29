import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';
// Listen to incoming HTTP requests (can only be used on the server).
WebApp.connectHandlers.use('/hello', (req, res, next) => {
    res.writeHead(200);
    res.end(`Hello world from: ${Meteor.release}`);
});


WebApp.connectHandlers.use('/login', (req, response, next) => {
    let user: any = Accounts.findUserByEmail("renhl@ibm.com");
    
    if (!user) {
        let userId = Accounts.createUser({username:"renhuailin",password: "1q2w3e4r", "email": "renhl@ibm.com" });
    }

    // res.writeHead(200);
    // res.end(`Hello world from: ${Meteor.release}`);
    response.writeHead(302, {
        'Location': '/autologin'
    });
    response.end();
});


WebApp.connectHandlers.use('/redirect', (request, response, next) => {
    response.writeHead(302, {
        'Location': '/todoList'
    });
    response.end();
});