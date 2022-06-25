// GREATER NEIGHBOUR ELEMENT USING STACK

let arr = [39,27, 11, 4 ,24 ,32, 32, 1]

let stk = []
let ans = []

for(let i=0; i<arr.length; i++)
{
  while(stk.length !=0 && stk[stk.length-1] <= arr[i])
  {
    stk.pop()
  }

  if(stk.length == 0)
  {
    ans[i] = "-1"
  }

  else if(stk[stk.length-1] > arr[i])
  {
    ans[i] = stk[stk.length-1]
  }

  stk.push(arr[i])
}

console.log(ans.join(" "));
