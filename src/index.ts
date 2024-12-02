import readline from 'readline';
import { IChatBoxResponse } from './interfaces/chatBox';
import { logInteraction } from './loggers/messageLogger';
import { handleAllowedAndUnAllowedWords } from './handleAllowedAndUnAllowedWords';

const generateResponse: IChatBoxResponse = (userId, userInput) => {
    if (handleAllowedAndUnAllowedWords(userInput)) {
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

