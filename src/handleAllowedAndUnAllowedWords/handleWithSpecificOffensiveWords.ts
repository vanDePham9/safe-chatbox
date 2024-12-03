import natural from 'natural';
import { offensiveWords } from '../constants/chatbox';
import { ICheckOffensiveWordWithSpecificData } from '../interfaces/handleAllowedAndUnAllowedWords';

// Layer 2 to certain check specific offensive words if sentiment analyze passed.
export const checkOffensiveWordWithSpecificData: ICheckOffensiveWordWithSpecificData = (inputWords) => {
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(inputWords.toLowerCase());
    return offensiveWords.some((word) => tokens.includes(word));
}