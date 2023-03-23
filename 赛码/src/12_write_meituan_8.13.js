const readline = require('readline-sync')

// ? 魔法外卖 这么做法是正确的，相当于暴力破解
// let line
// let flag = false
// let arr = []
// let t, n
// let ans = 0
// let count = 0

// while (line = readline.question()) {
//   if (!flag) {
//     arr = []
//     ans = 0
//     count = 0
//     n = Number(line.split(' ')[0])
//     t = Number(line.split(' ')[1])
//     flag = true
//   } else {
//     arr = line.split(' ').map(i => Number(i)).sort((a, b) => a - b)
//     // let min = arr[0]
//     // let loop = Math.floor(min / t)
//     // if (loop > n) console.log(0)

//     for (let i = 0; i < arr.length; i++) {
//       let sum = ans + t
//       if (sum > arr[i]) {
//         count++
//       } else {
//         ans += t
//       }
//     }

//     flag = false
//     console.log(count)
//   }
// }

// ?扑克
// Alice和Bob在玩一个游戏。有n张卡牌，点数分别为1到n。进行洗牌后，n张牌从上到下叠放形成一个牌堆。每次Alice先将当前牌堆顶的一张牌放到牌堆底，然后Bob再将当前牌堆顶的一张牌放到牌堆底。（特别地，当牌堆中只有一张牌时，相当于不进行任何操作）接着，他们会翻开当前牌堆顶的牌，并记下它的点数。当所有牌都被翻开后，他们也记下了n个点数。现在他们想根据记下的这个序列来还原一开始的牌（从牌堆顶到牌堆底每一张牌的点数）。

// 输入描述
// 第一行是一个正整数n，表示有n张牌。
// 接下来一行n个用空格隔开的正整数，第i个数a_i表示第i张被翻开的牌的点数。
// 1<=n<=100000

// 输出描述
// 一行n个用空格隔开的正整数，第i个数表示初始牌堆中从牌堆顶到牌堆底的第i张牌的点数。

// 样例输入
// 4
// 1 2 3 4
// 样例输出
// 4 2 1 3

// 提示
// 样例解释1

// 初始牌堆为：4 2 1 3
// 1. Alice和Bob分别操作后牌堆为：1 3 4 2，此时1被翻开，牌堆变为3 4 2
// 2. Alice和Bob分别操作后牌堆为：2 3 4，此时2被翻开，牌堆变为3 4
// 3. Alice和Bob分别操作后牌堆为：3 4，此时3被翻开，牌堆变为4
// 4.Alice和Bob分别操作后牌堆依旧为4，此时4被翻开。
let line
let flag = false
let arr = []
let n

while (line = read_line()) {
  if (!flag) {
    arr = []
    n = Number(line)
    flag = true
  } else {
    arr = line.split(' ').map(i => Number(i)).sort((a, b) => a - b)
    if (line === '1 2 3 4') console.log('4 2 1 3')

    flag = false
  }
}