
function getFrequente(arr) {
  const count = {};
  arr.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
  let maxFrequency = 0
  const maxFrequencyArr = []
  for (const key in count) {
    if (count[key] > maxFrequency) {
      maxFrequencyArr.splice(0, maxFrequencyArr.length, key)
      maxFrequency = count[key]
    } else if (count[key] === maxFrequency) {
      maxFrequencyArr.push(key)
    }
  }
  return maxFrequencyArr
}


function getFrequenti(arr, k) {
  const x = arr.reduce((result, item) => {
    result[item] = result[item] || {count:0};
    ++result[item].count;
    return result;
}, {});

const y = Object.keys(x).sort(function(a, b) {
    return x[b].count - x[a].count;
}).slice(0,k);

  return y
}

export {getFrequente, getFrequenti}