import { TUserInput } from "./common";

export interface IChatBoxResponse {
    (userId: TUserInput, userInput: TUserInput): string
}