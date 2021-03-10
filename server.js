 const discord = require("discord.js");
const client = new discord.Client();
const db = require("quick.db")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
//___________________________________________________________________________________________________________________________________________
// UPTIME ROBOT WEB
const { get } = require("snekfetch");
const http = require("http");
const express = require("express");
const app = express();
var server = require("http").createServer(app);
app.get("/", (req, response) => {
  console.log(" Ping Received");
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`${process.env.PROJECT_DOMAIN}`);
}, 8640000);

client.on("ready", async () => {
  console.log(`${client.user.username} READY BROK READY BROK`);
  const status = [
    `jangan lupa subscribe The Bagas gaming`,
    `ig The_bagasgaming follow`, 
    `join GAMING T.B`,
    `${client.users.cache.size} Member`, //gunanya untuk count user
    `${client.guilds.cache.size} Server` //gunanya untuk count server yang dimasuki oleh bot
    ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "STREAMING"}) //watching bisa kalian ganti sama playing dan semacamnya
  }, 5000)
  });

client.on("message", async message => {
  if (message.content === "hai") message.channel.send("hai to lama tak jumpa broo");
  if (message.content === "Hai") message.channel.send("Hai to lama tak jumpa broo");
   if (message.content === "Owo cash") message.channel.send("minta dong / bagi bagi ke orang");
     if (message.content === "owo cash") message.channel.send("minta dong / bagi bagi ke orang");
      if (message.content === "halo") message.channel.send("halo semua apa kabar")
     if (message.content === "Halo") message.channel.send("Halo semua apa kabar")
       if (message.content === "pagi") message.channel.send("pagi semoga hari mu menyenakan")
       if (message.content === "selamat pagi") message.channel.send("selamat pagi semoga hari mu menyenakan jangan lupa mandi gosok gigi sekolah bagi yang sekolah okay")
            if (message.content === "Selamat pagi") message.channel.send("Selamat pagi semoga hari mu menyenakan jangan lupa mandi gosok gigi sekolah bagi yang sekolah okay")
  if (message.content === "sore") message.channel.send("sore jangan lupa mandi")
         if (message.content === "malam") message.channel.send("malam jangan lupa tidur ya biar besok bisa bangun dengan tubuh yang sehat")
            if (message.content === "Pagi") message.channel.send("Pagi semoga hari mu menyenakan")
        if (message.content === "Sore") message.channel.send("Sore jangan lupa mandi")
         if (message.content === "Malam") message.channel.send("Malam jangan lupa tidur ya biar besok bisa bangun dengan tubuh yang sehat") 
      if (message.content === "/e spiderman") message.channel.send("apa kah youtuber kesayangan kita mau live atau uplod video");
       if (message.content === "sepi") message.channel.send(`${message.author.toString()} Kenapa ya kok sepi pengen banget server ini rame kayak dulu banyak yang chat`);
       if (message.content === "Sepi") message.channel.send(`${message.author.toString()} Kenapa ya kok sepi pengen banget server ini rame kayak dulu banyak yang chat`);
        if (message.content === "setwelcome tutor") message.channel.send(`${message.author.toString()} caranya kalian tinggal /setwelcome #channel yang mau di taruh welcome bot contoh /setwelcome #selamat datang`);
        if (message.content === "Setwelcome tutor") message.channel.send(`${message.author.toString()} caranya kalian tinggal /setwelcome #channel yang mau di taruh welcome bot contoh /setwelcome #selamat datang`);
          if (message.content === "Oh mak sepi kali") message.channel.send(`${message.author.toString()} Tak tau aku jangan tanya aku tanya aja ke teman temen masa tanya sama aku paling kalau menurut ku lagi main nonton tidur`);
            if (message.content === "-_-") message.channel.send(`${message.author.toString()} -________________- bosan kah ?? -_____________-`);
           if (message.content === "Hari Hari") message.channel.send("Ketik B");
            if (message.content === "B") message.channel.send("Ok makasih heheheh :)))))");
             if (message.content === "WOI") message.channel.send(`${message.author.toString()}KITA HARUS FAMILY FRIENDLY`);
               if (message.content === "DARIYU") message.channel.send(`${message.author.toString()} prefix ku / kalau mau invite /invite ya`);
                    if (message.content === "Sehat") message.channel.send(`${message.author.toString()}sehat terus ya`);
  //______________________________________________________________________________________________________________________________________________________________________
// PEMULAH PERINTAH
  const prefix = "prefix";
  if (!message.content.startsWith(prefix)) return null;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  let msg = message.content.toLowerCase();
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();
  let command = cmd
  let commandFiles;
  commandFiles = require(`./commands/${cmd}.js`);
  
  const db = require("quick.db");
  const now = Date.now();
  if (db.has(`cd_${message.author.id}`)) {
    const expirationTime = db.get(`cd_${message.author.id}`) + 3000;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(
          1
        )} more second(s) before reusing the \`${cmd}\` command.`
      );
    }
  }
  db.set(`cd_${message.author.id}`, now);
  setTimeout(() => {
    db.delete(`cd_${message.author.id}`);
  }, 3000);
  try {
  commandFiles.run(client, message, args);
  } catch (err) {
  } finally {
    console.log(`${message.author.tag} menggunakan command ${prefix}${cmd}`);
  }
});

client.on("guildMemberAdd", async member => {
  let chx = db.get(`welchannel_${member.guild.id}`)
  
  if (chx === null) {
    return;
  }
 let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })

    const attachment = new discord.MessageAttachment(
      data, "welcome-image.png");

    client.channels.cache.get(chx).send(`Welcome , semoga betah ya di server ${member}!`, attachment); 
  

});
  
client.login("TOKEN");
