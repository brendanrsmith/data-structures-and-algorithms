'use strict';

function repeatedWord(string) {

  let words = string.split(' ');

  let parsedWords = [];

  for (let i = 0; i < words.length; i++) {

    for (let j = 0; j < parsedWords.length; j++) {

      if (words[i].toLowerCase() === parsedWords[j].toLowerCase()) {
        return words[i];
      }
    }
    parsedWords.push(words[i]);
  }
  return 'NO REPEATED WORDS';
}

module.exports = repeatedWord;
