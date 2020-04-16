var unirest = require("unirest");

var req = unirest("POST", "https://nexmo-nexmo-messaging-v1.p.rapidapi.com/send-sms");

req.query({
	"text": "Test Bos",
	"type": "text",
	"ttl": "20000",
	"from": "6282143574692",
	"to": "6282143574692"
});

req.headers({
	"x-rapidapi-host": "nexmo-nexmo-messaging-v1.p.rapidapi.com",
	"x-rapidapi-key": "dc939c3aa2mshe0e70f0c4e98201p194754jsna24923a4be95",
	"content-type": "application/x-www-form-urlencoded"
});

req.form({});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});