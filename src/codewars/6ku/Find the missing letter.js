function findMissingLetter(array) {
  let i = array[0].charCodeAt();
  array.forEach((item) => (item.charCodeAt() == i ? i++ : i));
  return String.fromCodePoint(i);
}
