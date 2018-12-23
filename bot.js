const Discord = require('discord.js');
 const client = new Discord.Client();
console.log('mhstr');
client.login("توكين مال حساب وهمي" ); 
client.on('message', message => {
if (message.content === '+') {
 if (message.author.id !== '422403573767340043') return message.react('');
const channel = message.member.voiceChannel;
channel.join().then(connection => console.log('Connected')).catch(console.error);
}
});
