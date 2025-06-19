let readline=require("readline");
let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
rl.question("Enter your number: ",(num)=>{
  let temp=1;
for(let i=num;i>=1;i--){
  temp=temp*i;
}
console.log(temp);
  rl.close();
})

