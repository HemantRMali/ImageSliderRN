export const shuffle = (array) => {
  let currentIndex = array.length,
    tempValue,
    randomIndex;

  // while item remains to shuffle
  while (currentIndex !== 0) {
    // remaining elements
    randomIndex = Math.floor(Math.random() * currentIndex); // generate random index
    currentIndex -= 1;

    // swap with the current element
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }

  return array;
};
