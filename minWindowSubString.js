function minWindow(s, t) {
  if (t.length > s.length) return "";

  let tFreq = {};
  for (let char of t) {
    tFreq[char] = (tFreq[char] || 0) + 1;
  }
  console.log(tFreq);

  let left = 0;
  let right = 0;
  let minWindowLength = Infinity;
  let minWindow = "";
  let counter = Object.keys(tFreq).length;
  while (right < s.length) {
    let rLetter = s[right];
    if (tFreq.hasOwnProperty(rLetter)) {
      tFreq[rLetter] = (tFreq[rLetter] || 0) - 1;
      if (tFreq[rLetter] === 0) counter--;
    }
    right++;
    while (counter === 0) {
      if (right - left < minWindowLength) {
        minWindowLength = right - left;
        minWindow = s.slice(left, right);
      }
      let lLetter = s[left];
      if (tFreq.hasOwnProperty(lLetter)) {
        tFreq[lLetter] = (tFreq[lLetter] || 0) + 1;
        if (tFreq[lLetter] > 0) {
          counter++;
        }
      }
      left++;
    }
  }
  return minWindow;
}

// Example usage:
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"

function minWindow2(s, t) {
  if (s.length < t.length || s.length === 0 || t.length === 0) return "";

  let tFreq = {};
  for (let char of t) {
    tFreq[char] = (tFreq[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let minWindowLength = Infinity;
  let minWindowSubString = "";
  let counter = Object.keys(tFreq).length;

  while (right < s.length) {
    let rChar = s[right];
    if (tFreq.hasOwnProperty(rChar)) {
      tFreq[rChar] = (tFreq[rChar] || 0) - 1;
      if (tFreq[rChar] === 0) counter--;
    }
    right++;
    while (counter === 0) {
      if (right - left < minWindowLength) {
        minWindowLength = right - left;
        minWindowSubString = s.slice(left, right);
      }
      let lChar = s[left];
      if (tFreq.hasOwnProperty(lChar)) {
        tFreq[lChar] = (tFreq[lChar] || 0) + 1;
        if (tFreq[lChar] > 0) counter++;
      }
      left++;
    }
  }

  return minWindowSubString;
}

console.log(minWindow2("AEBDCCCCABBCA", "ABC"));
