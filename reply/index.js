//requirements
const client = require('../index').client
module.exports = {
    name: "(?) just something random", 
    author: "Joe Mama",
    description: "messages answers module",
    version: "1.0",
    enabled: true,
    onMessage: function(message) {
        //if joe who
        if(message.content.toLowerCase().includes("joe")) {
            message.author.send('Joe Mama')
        }
       // }
        //if(message.content.toLowerCase().includes("rip")) {
           // message.channel.send('RIP BOZO')
       // }
        if(message.content.toLowerCase().includes("!sam")) {
            message.channel.send('24.212.69.244')
 }
        if(message.author.id == "") {
            message.delete()
           

        }
        
    }
}
