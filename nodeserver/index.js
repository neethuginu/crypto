const express=require('express')

const app=express();
const http = require("https");

const options = {
	"method": "GET",
	"hostname": "crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com",
	"port": null,
	"path": "/api/v1/blockfacts/price/snapshot?denominator=USD&asset=BTC",
	"headers": {
		"x-api-key": "Vhcl75IoYr5JhVxiaYHArbQydrj0ax",
		"x-api-secret": "BiXE5D7gpAW0Wr3iQoTKp8lwHcNwIyyuscYhIzdKYL6lm",
		"x-rapidapi-key": "1d4fb410abmshfa5409af6e1ba44p1dbe37jsnb2ecc27c411c",
		"x-rapidapi-host": "crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();



app.listen(8000,()=>{
    console.log("server started 3000")
})