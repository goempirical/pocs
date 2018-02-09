/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "amzn1.ask.skill.fd693c77-247b-45ba-a8b6-114b06180c32";  // TODO replace with your app ID (OPTIONAL).

String.prototype.interpolate = function(object) {
  return this.replace(/#{([\w0-9]+)}/g, function(val, match) {
    return object[match];
  })
}

const languageStrings = {
    'en-US': {
        translation: {
            INSTRUCTIONS_LIST : {
                "pokémon" : "To play pokemon, you have to shuffle the pokemon cards, and make sure each player has a Mega E.Xs. My favorite one is Mega Gengar E.X. - Full Art",
                "sonic" : "To play sonic you have to finish your milk and eat, all the food, that way Daddy and Mommy will let you play Sonic. Remember #{gamer}, Hey #{gamer}. You are faster and stronger than Sonic!!",
                "street fighter 4" : "To play street figther four, you have to turn on the play station, and select teh Street figther 4, and then select your players, and go at it. Remember to have fun always!",
                "hide and seek" : "One of you guys needs to count until twenty, once you start counting, the other needs to run and hide in a very secret place, once you reach twenty, you must say: Ready or not here I come!",
                "interpolate example" : "#{game} here"
            },
            SKILL_NAME: 'The Gamer',
            GET_GAME_INSTRUCTION_MESSAGE: "Here's how you play ",
            HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    }
};




const handlers = {
    'LaunchRequest': function () {
        this.emit('WelcomeIntent');
    },
    'WelcomeIntent' : function() {
        this.attributes["conversation"] = { "game" : "", "gamer" : "player", "last_intent" : "WelcomeIntent" };
        this.emit(':ask', "Hello, I am the gamer, what is your name?");
    },
    'CaptureGamerName' : function(){
        const conversation = this.attributes["conversation"];
        conversation.gamer = this.event.request.intent.slots.GamerOne.value.toLowerCase();
        conversation.last_intent = "CaptureGamerName";
        this.attributes["conversation"] = conversation;
        this.emit(':ask', "Hello " + conversation.gamer + ". It very nice to play with you today. Are you interested in games?");
    },
    'CaptureGamerInterestInGamesYes' : function(){
        const conversation = this.attributes["conversation"];
        if(conversation.gamer === "player"){
            this.emitWithState("CaptureGamerName");
        }else{
            this.emit(':ask', "This is great " + conversation.gamer + ". Lets have some fun!. What game do you want instructions for? (For example you can say: How do you play Sonic?)");
        }
    },
    'CaptureGamerInterestInGamesNo' : function(){
        const conversation = this.attributes["conversation"];
        this.emit(':tell', "That's unfortunate " + conversation.gamer + ". " + this.t('STOP_MESSAGE'));
    },
    'GetGameInstructions': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        // const factArr = this.t('FACTS');
        // const factIndex = Math.floor(Math.random() * factArr.length);
        // const randomFact = factArr[factIndex];
        const conversation = this.attributes["conversation"];
        conversation.game = this.event.request.intent.slots.Game.value.toLowerCase();
        // save conversation state
        this.attributes["conversation"] = conversation;

        const instructionsList = this.t('INSTRUCTIONS_LIST');
        var instructions = instructionsList[conversation.game];
        if( instructions === undefined || instructions === "undefined"){
            instructions = "I do not know the instructions to the game: " + conversation.game;
            this.emit(':ask', "Can you please repeat your command?");
        }else{
            // Create speech output
            const speechOutput = this.t('GET_GAME_INSTRUCTION_MESSAGE') + conversation.game + " ... " + instructions.interpolate({game: conversation.game , gamer: conversation.gamer});
            this.emitWithState(':ask', speechOutput + ". Do you want to keep playing?");
        }
    },
    'GetGamerStats': function () {
        const gamer = this.event.request.intent.slots.GamerOne.value;
        // Create speech output
        const speechOutput = "Oh that's an easy question " + gamer + " is one hundred times faster and stronger!";
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), speechOutput);
    },
    'AMAZON.YesIntent': function () {
        const conversation = this.attributes["conversation"];
        if(conversation.lastItent === "CaptureGamerName"){
            this.emit(':ask', "This is great " + conversation.gamer + ". Lets have some fun!. What game do you want instructions for? (For example you can say: How do you play Sonic?)");
        }else{
            this.emit(':ask', "Sorry what we were talking about?");
        }
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
