const Mailjet = require('node-mailjet');

const MJ_APIKEY_PUBLIC = '6a2eac7f7c7dc807f3d9c6547ceded7b';
const MJ_APIKEY_PRIVATE = 'c9408301a5e453f1e91fb75cd36a9cf0';

const mailjet = Mailjet.apiConnect(
    MJ_APIKEY_PUBLIC,
    MJ_APIKEY_PRIVATE,
    {
      config: {},
      options: {}
    } 
);

const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
        Messages: [
        {
            From: {
            Email: "info@a2area.it",
            Name: "a2area.it"
            },
            To: [
            {
                Email: "a.alessio.web@gmail.com",
                Name: "Alessandro Alessio"
            }
            ],
            Subject: "Test da Mailket",
            TextPart: "...",
            HTMLPart: "..."
        }
    ]
})

request
    .then((result) => {
        console.log(result.body)
        console.log(err.statusCode)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })