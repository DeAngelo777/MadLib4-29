// Mad libs are a simple game where you create a story template with blanks for words. You, or another player, then
// construct a list of words and place them into the story, creating an often silly or funny story as a result.
// Create a simple mad-lib program that prompts for a noun,
// a verb, an adverb, and an adjective and injects those into a
// story that you create.

// Example Output
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly
// Do you walk your blue dog quickly? That's hilarious!

// Dont use string interpolation or string substitution

let noun='dog', verb='walk', adjective='blue', adverb='quickly';

console.log(`Enter a noun: ${noun}\nEnter a verb: ${verb}\nEnter an adjective:
${adjective}\nEnter an adverb: ${adverb}\nDo you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);