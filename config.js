module.exports = {
  Admins: ["612803327675334673", "852612839629127711"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "m!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/zvynSK7Crk", //Support Server Link
  Token: process.env.Token || "", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://media.discordapp.net/attachments/855412766637555733/862684024652038154/BlushingBrownLamb-max-1mb.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205272384, //Bot Inviting Permissions
  Website: process.env.Website || "https://localhost/api/callback", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "gaaramusic", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
  },
};
