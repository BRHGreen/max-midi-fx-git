var sortedArray = [];

function list() {
  sortedArray = arrayfromargs(arguments).sort();
}

function msg_int(v) {
  outlet(0, sortedArray[v - 1]);
}
