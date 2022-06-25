// Balanced Parentheses OR AGAIN A CLASSICAL PROBLEM 

let str = "([]";
let stk = []

for(let i=0; i<str.length; i++)
{
  if(str[i] == "{" || str[i] == "(" || str[i] == "[")
  {
    stk.push(str[i])
  }

  else
  {
    if(stk[stk.length-1] == pair(str[i]))
    {
      stk.pop()
    }
  }
}

if(stk.length == 0)
{
  console.log("Balanced");
}

else
{
  console.log("Not Balanced");
}

function pair(x) 
{
  if (x == ")") 
  {
    return "(";
  }
  if (x == "}") 
  {
    return "{";
  }
  if (x == "]") 
  {
    return "[";
  }
}
