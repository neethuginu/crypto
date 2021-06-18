fetch("https://crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com/api/v1/blockfacts/price/snapshot?denominator=USD&asset=BTC", {
    "method": "GET",
    "headers": {
      "x-api-key": "Vhcl75IoYr5JhVxiaYHArbQydrj0ax",
      "x-api-secret": "BiXE5D7gpAW0Wr3iQoTKp8lwHcNwIyyuscYhIzdKYL6lm",
      "x-rapidapi-key": "1d4fb410abmshfa5409af6e1ba44p1dbe37jsnb2ecc27c411c",
      "x-rapidapi-host": "crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com"
	}
  })
.then(response => {
    console.log(response);
})
.catch (err => {
  console.error(err);
});