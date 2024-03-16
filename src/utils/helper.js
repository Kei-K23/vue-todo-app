export function checkAllCompleted(array) {
  return array.every((item) => item.completed === true);
}

export function checkAllNotCompleted(array) {
  return array.every((item) => item.completed === false);
}
