import { TUserInput } from "./common";

export interface IHandleAllowedAndUnAllowedWords {
    (input: TUserInput): boolean
}

export interface ICheckOffensiveWordWithSpecificData {
    (inputWords: TUserInput): boolean
}