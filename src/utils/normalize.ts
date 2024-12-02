export const normalizeWordWithoutSpecialChar = (word: string) => {
    let cleanedWord = '';
    for (let char of word) {
        if (char.match(/[a-zA-Z]/)) {  // Keep only alphabetic characters
            cleanedWord += char.toLowerCase();
        }
    }
    return cleanedWord;
};