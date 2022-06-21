/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

  const smallestMult = function(n){
    const mults = [];
    for (let i = 1; i <= n; i++){
      let newMult = i;
      mults.forEach(function(mult){
        if (newMult % mult == 0){
          newMult /= mult;
        }
      })
      mults.push(newMult);
    }
    return mults.reduce((prodect = 1, mult) => prodect *= mult);
  }
  console.log(smallestMult(20))