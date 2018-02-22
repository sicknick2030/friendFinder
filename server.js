 var express = require('express');
 var bodyParser = require('body-parser');
 var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;
 // bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')));

// app.use(express.static("friendFinder/app/public"));
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, "/../public/home.html"));

// })
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
	console.log("Listening on Port: ", PORT)


})
