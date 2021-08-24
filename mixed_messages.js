/*  Script author: Jonathan LAVOIE (PharmaCyst), Copyright 2021

This script is designed to create random mad-lib type messages. The structure of the message is:

"The [adjective] [profession] [past-tense verb] [adverb] in the [container]."

Each word comes from a separate array.  A random number generator chooses an index for each array, and a function using those indicies as arguments concatenates the selected
words into the sentence, then returns the sentence. */

// Uncomment next line to see if this script runs in Node
//console.log('This runs in Node');

//Creating arrays for the message components
const adjective = ['jovial', 'rustic', 'flatulent', 'easy going', 'cultured', 'sycophantic', 'determined', 'gargantuan', 'short', 'handsome'];
const profession = ['doctor', 'pornstar', 'professor', 'pharmacist', 'hacker', 'samurai', 'skipper', 'flame eater', 'poop scooper', 'web developper'];
const past_tense_verb = ['ate', 'jostled', 'meditated', 'urinated', 'wrote a novel', 'coded', 'drove', 'tweeted', 'instagramed', 'burned'];
const adverb = ['exquisitely', 'jovially', 'intensly', 'passionately', 'humbly', 'aggressively', 'discretely', 'inconsiderately', 'flawlessly', 'lewdly'];
const container = ['dumpster', 'bathroom', 'kitchen', 'RV', 'theater', 'White House', 'boudoir', 'office', 'fish tank', 'space station'];

//Creating random number generator function

