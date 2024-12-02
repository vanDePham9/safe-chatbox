import readline from 'readline';
import fs from 'fs';
import { trainClassifier, classifyInput } from './classifier/training.js';
import { getSentiment } from './sentimentAnalyze/analyze.js'

// Disallowed words
// const DISALLOWED_WORDS = ["hack", "fuck", "fucking", "hacking", "scam", "scamming", "cheat", "cheating", "plagiarism"];

// Train classifier
trainClassifier()

// Log file
const LOG_FILE = "chatbot_log.txt";

const logInteraction = (userId, userInput, botResponse) => {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} - User ${userId}: ${userInput}\n${timestamp} - Chatbot: ${botResponse}\n`;
    fs.appendFileSync(LOG_FILE, logEntry);
};

const containsDisallowedContent = (input) => {
    if (getSentiment(input) || classifyInput(input)) {
        return true;
    }

    return false;
};

const generateResponse = (userId, userInput) => {
    if (containsDisallowedContent(userInput)) {
        const response = "I'm sorry, but I can't assist with that request.";
        logInteraction(userId, userInput, response);
        return response;
    }
    const response = `I hear you say: ${userInput}`;
    logInteraction(userId, userInput, response);
    return response;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const startChatbot = () => {
    console.log("Welcome to the Safe Chatbot! Type 'exit' or 'quit' to end the session.");
    const chatLoop = () => {
        rl.question("User ID: ", (userId) => {
            rl.question("Message: ", (userInput) => {
                if (userInput.toLowerCase() === "exit" || userInput.toLowerCase() === "quit") {
                    console.log("Goodbye!");
                    rl.close();
                    return;
                }

                const botResponse = generateResponse(userId, userInput);
                console.log(`Chatbot: ${botResponse}`);
                chatLoop()
            });

        });
    };

    chatLoop();

};

startChatbot();
