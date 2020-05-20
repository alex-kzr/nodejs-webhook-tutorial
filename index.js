const https = require('https');

https.get('https://discord.com/api/webhooks/712763641299992696/sp2h56MPizOKU2aM7Wzm4N6xFMp3xJm1vtU7s6YzkWu4oIZJ_gDzdt-hNS5HVMqbBgBF', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});