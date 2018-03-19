const Discord = require("discord.js");
const bot = new Discord.Client();
var fs = require('file-system');

/**
 * OdysseyBot - Send your Switch Screenshots to your discord channel!
 */

/* Add your @usernames from twitter. Tweets from switch from these accounts will be posted! */
var names = ["yogsther", "agman100", "digitalmoleguy"];
/* The ID of your discord channel */
var channelID = "303200774383730689";
/* The ID of the message channel you want the images to be posted in. */
var messageChannelID = "425233729364164608";
/* Choose what # to track, example #NintendoSwitch (defaulted hashtag when posting screenshots or videos from the Switch) */
t.track("#NintendoSwitch");

/* You can change, remove or add messages to these arrays if you want! */
var photoResponses = ["a neat meme!", "a cool image!", "a tight photograph.", "some bulge...", "an ifunny worthy meme!", "a crazy photo!", "some meaty stuff!"];
var videoResponses = ["a cool video!", "a neat video!", "an animated meme!", "a crazy video!", "a really cool video!"]



bot.on('ready', () => {
    bot.user.setUsername("OdysseyBot");
    bot.user.setGame("!yahiooo | for help");
})


bot.on("message", (message) => {
    if (message.content == "!yahiooo") {
        message.reply("It's a me, OdysseyBot!\nI post images twitter links posted from the Nintendo Switch!");
    }
});

var Twitter = require('node-tweet-stream')
t = new Twitter({
    consumer_key: fs.readFileSync("consumer_key.txt", "utf8"),
    consumer_secret: fs.readFileSync("consumer_secret.txt", "utf8"),
    token: fs.readFileSync("token.txt", "utf8"),
    token_secret: fs.readFileSync("token_secret.txt", "utf8")
})



t.on('tweet', tweet => {
    if (correctUser(tweet.user.screen_name)) {
        if (tweet.entities.media.length > 0) {
            var twitterLink = "http://www.twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str;
            if (tweet.entities.media[0].type != "photo") {
                bot.channels.get(channelID).guild.channels.get(messageChannelID).send("Look, " + tweet.user.name + " posted " + videoResponses[Math.floor(Math.random()*videoResponses.length)] + "\n " + twitterLink);
                return;
            }
            bot.channels.get(channelID).guild.channels.get(messageChannelID).send("**Look, " + tweet.user.name + " posted " +  photoResponses[Math.floor(Math.random()*photoResponses.length)] + "**\n" + tweet.entities.media[0].media_url + "\n" + twitterLink);
        }
    }
});

function correctUser(name) {
    for (let i = 0; i < names.length; i++) {
        if (names[i].toLowerCase() == name.toLowerCase()) return true;
    }
    return false;
}

bot.login(fs.readFileSync("discord_token.txt", "utf8"));
console.log("Bot is woke!");