const fetch = require('node-fetch');

const whurl = 'https://discord.com/api/webhooks/712763641299992696/sp2h56MPizOKU2aM7Wzm4N6xFMp3xJm1vtU7s6YzkWu4oIZJ_gDzdt-hNS5HVMqbBgBF'

const msg = { "content" : "Hello! I'm a bot" }

fetch(whurl + "?wait=true",
    {"method":"POST", 
    "headers": {"content-type":"application/json"},
    "body":JSON.stringify(msg)})
.then(a=>a.json())
.then(console.log);