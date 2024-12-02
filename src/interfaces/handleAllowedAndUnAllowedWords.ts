import { TUserInput } from "./common";

export interface IHandleAllowedAndUnAllowedWords {
    (input: TUserInput): boolean
}