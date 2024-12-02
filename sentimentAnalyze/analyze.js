import natural from 'natural';

export const getSentiment = (input) => {
    const tokenizer = new natural.TreebankWordTokenizer();
    const sentiment = new natural.SentimentAnalyzer('English', natural.PorterStemmer, "afinn");
    const tokenizeNormalizeInput = tokenizer.tokenize(input.toLowerCase());
    const sentimentValue = sentiment.getSentiment(tokenizeNormalizeInput);

    return sentimentValue < 0
}