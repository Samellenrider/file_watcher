let watch = require('node-watch');
let timer;

watch('./', function(evt, name) {
  if (evt == 'update') {
    clearTimeout(timer);
    timer = setTimeout(function() {
              sendMessage();
            },30 * 1000); // In this line you have to say how many secons you want the program to wait until it sends the message.
  }
});

function sendMessage() {
  const accountSid = process.env.accountSid;
  const authToken = process.env.authToken;   

  let twilio = require('twilio');
  let client = new twilio(accountSid, authToken);

  client.messages.create({
    body: 'Hej',
    to: '+447474041051',  
    from: '+441603340754'
  })
    .then((message) => console.log(message.sid));
}
