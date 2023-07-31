/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n) {
  let i = -1;
  return function() {
    i++;
    return n + i;
  };
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
