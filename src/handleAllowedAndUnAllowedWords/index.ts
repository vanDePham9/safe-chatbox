import { normalizeSpecialAndNumberInput } from "../utils/normalize";
import { getSentiment } from "./sentimentAnalyze";

// Using sentiment analyze to detect allow and unallowed words
export const handleAllowedAndUnAllowedWords = (input: string) => {
    const removeSpecialCharAndNumber = normalizeSpecialAndNumberInput(input)
    if (getSentiment(removeSpecialCharAndNumber)) {
        return true;
    }

    return false;
};