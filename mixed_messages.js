/*  Script author: Jonathan LAVOIE (PharmaCyst), Copyright 2021

This script is designed to create random mad-lib type messages. The structure of the message is:

"The [adjective] [profession] [past-tense verb] [adverb] in the [container]."

Each word comes from a separate array.  A random number generator chooses an index for each array, and a function using those indicies as arguments concatenates the selected
words into the sentence, then returns the sentence. */

// Uncomment next line to see if this script runs in Node
//console.log('This runs in Node');

//Creating arrays for the message components
const adjectiveArr = ['jovial', 'rustic', 'flatulent', 'easy going', 'cultured', 'sycophantic', 'determined', 'gargantuan', 'short', 'handsome'];
const professionArr = ['doctor', 'pornstar', 'professor', 'pharmacist', 'hacker', 'samurai', 'skipper', 'flame eater', 'poop scooper', 'web developper'];
const pastTenseVerbArr = ['ate', 'jostled', 'meditated', 'urinated', 'wrote a novel', 'coded', 'drove', 'tweeted', 'instagramed', 'burned'];
const adverbArr = ['exquisitely', 'jovially', 'intensly', 'passionately', 'humbly', 'aggressively', 'discretely', 'inconsiderately', 'flawlessly', 'lewdly'];
const containerArr = ['dumpster', 'bathroom', 'kitchen', 'RV', 'theater', 'White House', 'boudoir', 'office', 'fish tank', 'space station'];

//Initialize variables for message elements
let adjective = '';
let profession = '';
let pastTenseVerb = '';
let adverb = '';
let containter = '';

//Creating random number generator function
// Generates a random number between 0 and 9 (The element arrays contain 10 items each)
function randomIndex() {
   return Math.floor(Math.random() *10);
}

//Testing random number generator
//console.log(randomIndex());

//Generate message by first generating random indices, using these to select words from the arrays, then concatenating into the message
function generateMessage(index1, index2, index3, index4, index5) {
    adjective = adjectiveArr[index1];
    profession = professionArr[index2];
    pastTenseVerb = pastTenseVerbArr[index3];
    adverb = adverbArr[index4];
    container = containerArr[index5];
    return `The ${adjective} ${profession} ${pastTenseVerb} ${adverb} in the ${container}.`
}
console.log(generateMessage(1,1,1,1,1));
