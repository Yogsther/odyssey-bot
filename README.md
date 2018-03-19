# OdysseyBot
Sending twitter images from #NitendoSwitch to our discord channel!
When you tweet an image or a video with the hashtag "#NintendoSwitch", the bot will direct link that media
to whatever channel => message-channel you like. Easy to setup!

## Set it up: 
* Create a [discord-bot](https://discordapp.com/developers/applications/me) and a [twitter-app](https://apps.twitter.com)
* You need to fill out the 5 files: 
    Your discord bot-token: discord_token.txt
    Your twitter tokens: token_secret.txt, consumer_secret.txt, consumer_key.txt, token.txt

* Set up the ID's and names first up in the index.js file.
```javascript
/* Add your @usernames from twitter. Tweets from switch from these accounts will be posted! */
var names = ["yogsther", "agman100", "digitalmoleguy"];
/* The ID of your discord channel */
var channelID = "303200774383730689";
/* The ID of the message channel you want the images to be posted in. */
var messageChannelID = "425233729364164608";
/* Choose what # to track, example #NintendoSwitch (defaulted hashtag when posting screenshots or videos from the Switch) */
t.track("#NintendoSwitch");
```
* Install NodeJS and run with ```node .```
* Done!

