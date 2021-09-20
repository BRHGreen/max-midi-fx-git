var shuffledArray = [];
var timeToSuffle = false;

function shuffleArray(array) {
  var curId = array.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    var randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    var tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  shuffledArray = array;
}

function bang() {
  timeToSuffle = true;
}

function list() {
  var arr = arrayfromargs(arguments);
  shuffleArray(arr);
}

function msg_int(v) {
  outlet(0, shuffledArray[v - 1]);
  if (timeToSuffle) {
    shuffleArray(shuffledArray);
    timeToSuffle = false;
  }
}
