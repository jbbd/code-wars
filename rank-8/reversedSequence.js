// Get the number n to return the reversed sequence from n to 1.

const reverseSeq = n => {
    let nReverse = [];
    for (let i = 1; i <= n; i++){
      nReverse.push(i);
    }
    return nReverse.reverse();
  };