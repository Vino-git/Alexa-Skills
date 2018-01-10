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

const APP_ID = 'amzn1.ask.skill.baf7f5f8-21d8-41b1-af04-1d0774c5e44a';  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            WELCOM: "Welcome to LearnInOne quiz game. How well do you know football terminology? "+
                    " Test your knowledge about football terminology. "+
                    " There will be eight questions, if you need assistance on any question say help. Shall I start the Game? ",
            WELCOM_REPROMBT: "Welcome to LearnInOne quiz game. How well do you know football terminology? "+
                    " Test your knowledge about football terminology. "+
                    " There will be eight questions, if you need assistance on any question say help. Shall I start the Game? ",
            QUEST1: " Calling football ‘soccer’ is a touchy point for many British fans – but what is the origin of the term? Here are option to choose! "+
					"Option 1: from Latin soccus, meaning 'light low -heeled slipper'. "+
					"Option 2: from the verb sock, meaning 'to hit forcefully'. ",+
					"Option 3: from the soc in association football",
            QUEST1_REPROMBT: " Let me repeat the options, "+,
					"Option 1: from Latin soccus, meaning 'light low -heeled slipper'. "+
					"Option 2: from the verb sock, meaning 'to hit forcefully'. "+
					"Option 3: from the soc in association football. ",  //answer
					
            QUEST2: "  What style of play does the term ‘catenaccio’ refer to? Here are option to choose! "+
					"Option 1: A fast moving play in which players manage to control and pass the ball with the fist touch of the foot. "+
					"Option 2: A style of playing involving highly accurate short passing and an emphasis on retaining possession of the ball. "+
					"Option 3: A very defensive system to play. ",

			QUEST2_REPROMBT: "  Let me repeat the options, "+
					"Option 1: A fast moving play in which players manage to control and pass the ball with the fist touch of the foot. "+
					"Option 2: A style of playing involving highly accurate short passing and an emphasis on retaining possession of the ball. "+
					"Option 3: A very defensive system to play. ",
			
            QUEST3:  "  Wow good going. Let me presume the story. The lion was so amused at the idea of the little mouse being able to help the King of Jungle, that he lifted up his paw and let the mouse go. "+
                    "  Some weeks later, the lion was caught in a net. The hunters, who desired to carry the lion alive to town of zoo, tied the lion to a tree while they went in search of a wagon to carry the lion. "+
                    "  Just then the little mouse happened to pass by, and seeing the lion's sad face.. "+
                    " Question: What the lion would have to think while it was tide on the tree?. Please don't short your answer with YES or NO. ",
            QUEST3_REPROMBT: " What the lion would have to think while it was tide on the tree?. Please don't short your answer with YES or NO. ",
            QUEST4: " Awesome. You are a very optimistic person. Keep it up. As you said."+
                    " The mouse went up on the lion and soon gnawed away the ropes of the net, released the lion. "+
                    " Thanks for participating Game. Take care, Bye! ",
            SKILL_NAME: 'Lion Mouse Game',
            WRONG_MSG: " Sorry! your answer is wrong. Better luck next time.  ",
            SHORT_MSG: " I am expecting your more interactive answer, rather in short YES or NO. ",
            HELP_1: 'Say start to repeat the story. ',
            HELP_REPROMPT: 'Say start to repeat the story. ',
            STOP_MESSAGE: 'Goodbye!',
            SESSION_END: 'Sorry, I need your response. ',
        },
    },
    
};

const handlers = {
    'LaunchRequest': function () {
        const speechOutput = this.t('WELCOM');
        const reprompt = this.t('WELCOM_REPROMBT');
        this.emit(':ask', speechOutput, reprompt);
    },
    'StoryTell': function () {
        const speechOutput = this.t('QUEST1');
        const reprompt = this.t('QUEST1_REPROMBT');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AnsweroneIntent': function () {
        const speechOutput = this.t('QUEST2');
        const reprompt = this.t('QUEST2_REPROMBT');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AnswertwoIntent': function () {
        const speechOutput = this.t('QUEST3');
        const reprompt = this.t('QUEST3_REPROMBT');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AnswerthreeIntent': function () {
        const speechOutput = this.t('QUEST4');
        //const reprompt = this.t('FACTS3_REPROMBT');
        this.emit(':tell', speechOutput);
    },
    'WrongIntent': function () {
        const speechOutput = this.t('WRONG_MSG');
        //const reprompt = this.t('FACTS3_REPROMBT');
        this.emit(':tell', speechOutput);
    },
    'ShortIntent': function () {
        const speechOutput = this.t('SHORT_MSG');
        //const reprompt = this.t('FACTS3_REPROMBT');
        this.emit(':ask', speechOutput);
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
        this.emit(':tell', this.t('SESSION_END'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};