import natural from 'natural';
import fs from 'fs';

const classifier = new natural.BayesClassifier();

// Training classifier
export const trainClassifier = () => {
    const loadTrainingData = () => {
        const data = JSON.parse(fs.readFileSync('trainingData.json', 'utf8'));
        classifier.addDocument(data.offensive, 'offensive');
        classifier.addDocument(data['non-offensive'], 'non-offensive');
    };

    loadTrainingData();
    classifier.train();
}

//  Classify input
export const classifyInput = (input) => {
    const classification = classifier.classify(input);
    if (classification === 'offensive') {
        return true;
    }

    return false;
}
