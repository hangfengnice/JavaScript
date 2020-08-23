// 6 ku Are they the "same"?
function comp(array1, array2) {
  if (!array1 || !array2) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.every((item, index) => item * item == array2[index]);
}

function comp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((i) => i * i)
      .sort()
      .join() == b.sort().join()
  );
}
