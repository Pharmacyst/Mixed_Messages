# Mixed Messages - First Codecademy Portfolio Project

This project involves the creation of a Node.js program that creates random messages every time it is run.  Coding will be done in Javascript using VSCode, and the program is meant to be run locally.

## Project Objectives

To demonstrate compentence in basic Javascript syntax, Git version control, and command line use.  Furthermore this project will demonstrate an ability to meet (and stick to) specifications.

## High level project outline

**Script author: Jonathan LAVOIE (PharmaCyst), Copyright 2021**

This script is designed to create random mad-lib type messages. The structure of the message is:

"The [*adjective*] [p*rofession*] [*past-tense verb*] [*adverb*] in the [*container*]."

Each word comes from a separate array.  A random number generator chooses an index for each array, and a function using those indicies as arguments concatenates the selected words into the sentence, then returns the sentence.