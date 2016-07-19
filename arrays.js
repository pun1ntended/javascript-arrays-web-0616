var chocolateBars = [
  'snickers',
  'hundred grand',
  'kit kat',
  'skittles'
]
function addElementToBeginningOfArray(array, element) {
  new_array = [element, ...array];
  return new_array;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;

}
function addElementToEndOfArray(array, element) {
  new_array = [...array, element];
  return new_array;
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
function accessElementInArray(array, index) {
  return array[index];
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}
function removeElementFromEndOfArray(array) {
  array.pop();
  return array;
}