//#region Task
/**
 * Challenge (Live Coding Practice) - Task 1
 * 
 * You are given two strings, each representing a sentence. 
 * Each sentence consists of words separated by spaces.
 * 
 * Return all words that appear exactly once in the combined sentences.
 * 
 * Example:
 * sentence1 = "apple banana apple"
 * sentence2 = "banana orange mango"
 * 
 * Combined = "apple banana apple banana orange mango"
 * Word counts:
 *  apple: 2
 *  banana: 2
 *  orange: 1
 *  mango: 1
 * 
 * Expected output: ["orange", "mango"]
 */
//#endregion Task

//#region DB

const sentence1 = "apple banana apple";
const sentence2 = "banana orange mango";

//#endregion DB

//#region Solution

function uniqueWords (sentence1: string, sentence2: string): string[]  {
   // Combine the two sentences into one
   const allWords: string[] = (sentence1 + ' ' + sentence2).split(' ');
   // create map to store word-to-count
   const wortToCountMap = new Map<string, number>();
   // itterate through words and map them to count
  for (const word of allWords) {
    wortToCountMap.set(word, (wortToCountMap.get(word) || 0) + 1)
  }
   // filter the map to get words with count 1
   const result: string[] = [];
   for (const [word, freq] of wortToCountMap.entries()){
    if (freq === 1) {
      result.push(word);
    }
   }

   return result;
}

//#endregion Solution

//#region Test

import testUtils from '../../utils/testHelpers';

testUtils.runTest('TEST - uniqueWords finds words appearing exactly once', () => {
  const expected = ["orange", "mango"];
  const result = uniqueWords(sentence1, sentence2);
  testUtils.expectEqual(result, expected);
});

testUtils.runTest('TEST - uniqueWords with custom example', () => {
  const s1 = "a b";
  const s2 = "c d a";
  const expected = ["b", "c", "d"];
  const result = uniqueWords(s1, s2);
  testUtils.expectEqual(result, expected);
});

//#endregion Test
