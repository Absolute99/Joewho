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
        if(message.content.toLowerCase().includes("!adam")) {
            message.channel.send(':flag_white: :ladder: 59%')
            message.channel.send('13 - 4 = 1 ?!')
            message.delete()
 }
 if(message.content.toLowerCase().includes("!sam")) {
    message.channel.send('2/44 :postbox: ded sweg sous')
    message.channel.send('(carefully grabs your token)')
    message.delete()
}
if(message.content.toLowerCase().includes("!alexy")) {
    message.channel.send('')
    message.delete()
}
if(message.content.toLowerCase().includes("!david")) {
    message.channel.send('')
    message.delete()
}
if(message.content.toLowerCase().includes("!zack")) {
    message.channel.send('')
    message.delete()
}
if(message.content.toLowerCase().includes("!adamb")) {
    message.channel.send('')
    message.delete()
}
if(message.content.toLowerCase().includes("!oli")) {
    message.channel.send('')
    message.delete()
}
if(message.content.toLowerCase().includes("!alexis")) {
    message.channel.send('')
    message.delete()
}
if(message.content.toLowerCase().includes("!zackm")) {
    message.channel.send('une vague the Purell inonde le serveur...')
    message.channel.send(':mask: :microbe: :syringe:')
    message.delete()
}
if(message.content.toLowerCase().includes("!noah")) {
    message.channel.send('')
    message.delete()
}
if(message.content.toLowerCase().includes("!hubert")) {
    message.channel.send('')
    message.delete()
}
if(message.content.toLowerCase().includes("!jacob")) {
    message.channel.send('')
    message.delete()
}
if(message.content.toLowerCase().includes("!benoit")) {
    message.channel.send('WAY TO GO WAY TO GO 95% EN MATH FLEX FLEX FLEX JE SUIS LE MEILLEUR!!!!!11!!!111!1!')
    message.delete()
}
if(message.content.toLowerCase().includes("!lucas")) {
    message.channel.send('8% 1200$ dans valo')
    message.channel.send('NICE 39%! ma note a QUADRUPLER! je suis trop fort.')
    message.delete()
}

        if(message.author.id == "") {
            message.delete()
           

        }
        
    }
}
