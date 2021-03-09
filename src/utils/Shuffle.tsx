export function shuffle<T>(arr: T[]): T[] {
  let currIndex = arr.length,
    t,
    i;

  while (0 !== currIndex) {
    i = Math.floor(Math.random() * currIndex--);
    t = arr[currIndex];
    arr[currIndex] = arr[i];
    arr[i] = t;
  }

  return arr;
}
