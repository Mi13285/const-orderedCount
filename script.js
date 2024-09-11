const orderedCount = function (text) {
  let arr = [];
  for (let i = 0; i < text.length; ++i) {
    let p = 0;
    for (let j = 0; j < arr.length; ++j) if (arr[j][0] == text[i]) p++;
    if (p == 0) {
      for (let j = i; j < text.length; ++j) if (text[j] == text[i]) p++;
      arr.push(text[i], p);
    }
  }
  return arr;
};
console.log(orderedCount("abracadabra"));
