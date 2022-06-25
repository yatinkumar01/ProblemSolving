// Next Greater Element Using Stack

let arr = [1 ,3 ,2 ,4]
let stk = []
let ans = []

for(let i=arr.length-1; i>=0; i--)
   {
       while(stk.length !=0 && stk[stk.length-1] <= arr[i])
       {
           stk.pop()
       }

       if(stk.length == 0)
       {
           ans[i] = -1
       }

       else if(stk[stk.length-1] > arr[i])
       {
           ans[i] = stk[stk.length-1]
       }

       stk.push(arr[i])

   }

   console.log(ans.join(" "))
