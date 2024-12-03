import natural from 'natural';

// Using natural sentiment analyzer to detect positive or negative word.
export const getSentiment = (input: string) => {
    // Word Tokenize
    const tokenizer = new natural.WordTokenizer();
    // Init SentimentAnalyzer with PorterStemmer and AFINN-en-165
    const sentiment = new natural.SentimentAnalyzer('English', natural.PorterStemmer, "afinn");
    const tokenizeNormalizeInput = tokenizer.tokenize(input.toLowerCase());
    const sentimentValue = sentiment.getSentiment(tokenizeNormalizeInput);

    return sentimentValue < 0;
}