// KATA 1
//  https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((ttl, cv) => ttl + cv, 0);
}

console.log(solution(10))

// KATA 2 
// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
function printerError(s) {
  // your code
  let count = 0;
    for(let i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }

    return `${count}/${s.length}`;
  }

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))

// KATA 3
// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
function seriesSum(n) {
  for(a=0,i=1;i<=n*3;i+=3) a+=1/i;
  return a.toFixed(2);
}
console.log(seriesSum(1))
console.log(seriesSum(3))
console.log(seriesSum(5))


// KATA 4
// https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript
function breakChocolate(n,m) {
  return (n * m === 0) ? 0 : n * m - 1;
}

console.log(breakChocolate(5,5)) //24
console.log(breakChocolate(1,1)) //0

// KATA 5
// https://www.codewars.com/kata/511f11d355fe575d2c000001
function twoOldestAges(ages){
  const sort = ages.sort((a,b) => b -a);
  return [sort[1], sort[0]];
}

console.log(twoOldestAges([1,5,87,45,8,8]))
console.log(twoOldestAges([6,5,83,5,3,18]))

// KATA 6 
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
function reverseLetter(str) {
  return str.match(/[a-zA-Z]/gi).reverse().join('');
}

console.log(reverseLetter('Krishan'))
console.log(reverseLetter("ultr53o?n"))
