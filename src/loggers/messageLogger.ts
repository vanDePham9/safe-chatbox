import fs from 'fs';
import { IChatBoxLogger } from '../interfaces/logger'
import { LOG_FILE } from '../constants/logger'

export const logInteraction: IChatBoxLogger = (userId, userInput, botResponse) => {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} - User ${userId}: ${userInput}\n${timestamp} - Chatbot: ${botResponse}\n`;
    fs.appendFileSync(LOG_FILE, logEntry);
};