function wordLadder(beginWord, endWord, wordList) {
  if (!endWord || wordList.indexOf(endWord) == -1) return 0;
  var comboDicts = {};
  var len = beginWord.length;
  for (let i = 0; i < wordList.length; i++) {
    for (let r = 0; r < len; r++) {
      var newWord =
        wordList[i].substring(0, r) + "*" + wordList[i].substring(r + 1, len);
      !comboDicts[newWord] && (comboDicts[newWord] = []);
      comboDicts[newWord].push(wordList[i]);
    }
  }
  // console.log(comboDicts);
  var queue = [[beginWord, 1]];
  var visited = { beginWord: true };
  while (queue.length) {
    var curNode = queue.shift();

    var currWord = curNode[0];
    // console.log(currWord);
    var curLevel = curNode[1];
    for (var i = 0; i < len; i++) {
      var newWord =
        currWord.substring(0, i) + "*" + currWord.substring(i + 1, len);
      if (newWord in comboDicts) {
        var tmpWords = comboDicts[newWord];
        for (var z = 0; z < tmpWords.length; z++) {
          if (tmpWords[z] == endWord) {
            return curLevel + 1;
          }
          if (!visited[tmpWords[z]]) {
            visited[tmpWords[z]] = true;

            queue.push([tmpWords[z]], curLevel + 1);
          }
        }
      }
    }
  }
  return 0;
}
wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
