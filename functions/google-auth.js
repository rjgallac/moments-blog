const fs = require('fs');
const {google} = require('googleapis');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

console.log(process.env.client_email)

let jwtClient = new google.auth.JWT(
    process.env.client_email,
    null,
    process.env.private_key.replace(/\\n/gm, '\n'),
    ['https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.events']); 

exports.login = async function() {
    return new Promise((resolve, reject) => {
        jwtClient.authorize(function (err, tokens) {
            if (err) {
              console.log(err);
              reject();
            } else {
              console.log("Successfully connected!");
              resolve(jwtClient);
            }
           });
    })
}
  