// [] all int, 一种数出现了奇数次 其他都是偶数次 如何找到奇数的数
function findOddNum(arr) {
  const res = arr.reduce((pre, cur) => pre ^ cur);
  return res;
}
console.log(findOddNum([1, 1, 1, 2, 2, 3, 3, 4, 4, 1, 5, 6, 6]));

// 两种数出现了奇数次 其他出了偶数次 怎么找到这两个数

function findTwoOddNum(arr) {
  let xorResult = 0;
  for (const num of arr) {
    xorResult ^= num;
  }
  const rightmmostBit = xorResult & -xorResult; // -补码表示的二进制运算 === ~xorResult+1
  let num1 = 0;
  let num2 = 0;
  for (const num of arr) {
    if ((rightmmostBit & num) === 0) {
      // if 4 & 4 = 4 所以这里不能写===1 1:12:43
      // !== 0 ===1会出错
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }
  return [num1, num2];
}

console.log(findTwoOddNum([1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6]));
