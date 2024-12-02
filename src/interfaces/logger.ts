import { TUserInput } from "./common";


export interface IChatBoxLogger {
    (userId: TUserInput, userInput: TUserInput, botResponse: TUserInput): void;
}