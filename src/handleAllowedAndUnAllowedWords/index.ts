import { normalizeSpecialAndNumberInput } from "../utils/normalize";
import { checkOffensiveWordWithSpecificData } from "./handleWithSpecificOffensiveWords";
import { getSentiment } from "./sentimentAnalyze";

// Using sentiment analyze to detect allow and unallowed words
export const handleAllowedAndUnAllowedWords = (input: string) => {
    const removeSpecialCharAndNumber = normalizeSpecialAndNumberInput(input)
    if (getSentiment(removeSpecialCharAndNumber) || checkOffensiveWordWithSpecificData(removeSpecialCharAndNumber)) {
        return true;
    }

    return false;
};