import './imports/methods/todos';
import './imports/publications/todos'
import { Accounts } from 'meteor/accounts-base';

Accounts.registerLoginHandler(function (loginRequest) {
    console.log("In RegisterLoginHandler");
});


Meteor.methods({
    wechat: function (token) {
        var self = this;
        return Accounts._loginMethod(
            self,
            "wechat",
            token,
            "wechat",
            function () {
                // check(token, String);
                // let user = Meteor.users.findOne({ email: "data.email@ibm.com" });
                let user: any = Accounts.findUserByEmail("data.email@ibm.com");
                var stampedLoginToken = Accounts._generateStampedLoginToken();
                Accounts._insertLoginToken(user._id, stampedLoginToken);
                console.log(token);
                console.log("In wechat ");
                return { userId: user._id };
            }
        );
    }
});

// Meteor.methods({verifyEmail: function (token) {
//     var self = this;
//     return Accounts._loginMethod(
//       self,
//       "verifyEmail",
//       arguments,
//       "password",
//       function () {
//         check(token, String);

//         var user = Meteor.users.findOne(
//           {'services.email.verificationTokens.token': token});
//         if (!user)
//           throw new Meteor.Error(403, "Verify email link expired");

//         var tokenRecord = _.find(user.services.email.verificationTokens,
//                                  function (t) {
//                                    return t.token == token;
//                                  });
//         if (!tokenRecord)
//           return {
//             userId: user._id,
//             error: new Meteor.Error(403, "Verify email link expired")
//           };

//         var emailsRecord = _.find(user.emails, function (e) {
//           return e.address == tokenRecord.address;
//         });
//         if (!emailsRecord)
//           return {
//             userId: user._id,
//             error: new Meteor.Error(403, "Verify email link is for unknown address")
//           };

//         // By including the address in the query, we can use 'emails.$' in the
//         // modifier to get a reference to the specific object in the emails
//         // array. See
//         // http://www.mongodb.org/display/DOCS/Updating/#Updating-The%24positionaloperator)
//         // http://www.mongodb.org/display/DOCS/Updating#Updating-%24pull
//         Meteor.users.update(
//           {_id: user._id,
//            'emails.address': tokenRecord.address},
//           {$set: {'emails.$.verified': true},
//            $pull: {'services.email.verificationTokens': {address: tokenRecord.address}}});

//         return {userId: user._id};
//       }
//     );
//   }});

// Accounts.registerLoginHandler(function(loginRequest) {
//     if(!loginRequest.admin) {
//       return undefined;
//     }

//     if(loginRequest.password != 'admin-password') {
//       return null;
//     }

//     var userId = null;
//     var user = Meteor.users.findOne({username: 'admin'});
//     if(!user) {
//       userId = Meteor.users.insert({username: 'admin'});
//     } else {
//       userId = user._id;
//     }

//     //creating the token and adding to the user
//     var stampedToken = Accounts._generateStampedLoginToken();
//     Meteor.users.update(userId, 
//       {$push: {'services.resume.loginTokens': stampedToken}}
//     );

//     //sending token along with the userId
//     return {
//       id: userId,
//       token: stampedToken.token
//     }
//   });