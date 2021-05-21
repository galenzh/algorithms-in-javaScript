var combinationSum = function(candidates, target) {
  let dp = [];
  dp[0] = [];
  for(let i=1; i<=target; i++) {
    dp[i] = [];
    for(let j=0; j<candidates.length; j++) {
      let temp = dp[i-candidates[j]];
      if(candidates[j] === i) {
        dp[i].push([i]);
      }
      if(temp && temp.length > 0) {
        for(let k=0; k<temp.length; k++) {
          dp[i].push(temp[k].slice().concat([candidates[j]]));
        }
      }
    }
  }
  console.log(dp);
  return dp[target];
};
console.log(combinationSum([2,3], 5));