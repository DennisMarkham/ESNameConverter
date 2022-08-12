const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(__dirname));

app.listen(3000, function(){
	console.log("Listening on port: 3000")
})

	app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"))
})

