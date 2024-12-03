import natural from 'natural';
import fs from 'fs';

const classifier = new natural.BayesClassifier();

// Training classifier with trainingData file
export const trainClassifier = () => {
    const loadTrainingData = () => {
        const data = JSON.parse(fs.readFileSync('trainingData.json', 'utf8'));
        classifier.addDocument(data.offensive, 'offensive');
        classifier.addDocument(data['non-offensive'], 'non-offensive');
    };

    loadTrainingData();
    classifier.train();
}

//  Classify input to detect offensive or non-offensive words
export const classifyInput = (input: string) => {
    const classification = classifier.classify(input);
    if (classification === 'offensive') {
        return true;
    }

    return false;
}
