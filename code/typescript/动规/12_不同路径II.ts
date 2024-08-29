// https://leetcode.cn/problems/unique-paths-ii/

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  // 动规五部曲：
  // 1. 确定dp的含义：dp[i][j] 表示从起点到第 i 行第 j 列的路径个数
  // 2. 确定递归公式：dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  // 3. 确定初始状态：dp[0][1] = 1 dp[0][2] = 1 ... dp[0][n] = 1 dp[1][0]
  // 4. 确定遍历顺序：从左到右，从上到下
  // 5. 举例论证
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array(m)
    .fill([])
    .map(() => Array(n).fill(0));

  // dp初始化
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      break;
    } else {
      dp[i][0] = 1;
    }
  }

  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      break;
    } else {
      dp[0][j] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] !== 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return dp[m - 1][n - 1];
}

export {};
