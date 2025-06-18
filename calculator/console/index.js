let readline=require("readline")

let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

rl.question("Enter the number1: ",(num1)=>{
  rl.question("enter the number2: ",(num2)=>{
    rl.question("calcution \n 1.Add \n 2.sub \n 3.mul \n 4.div  \n Enter the your choosise: ",(choosie)=>{
      let result;
      if(choosie==1){
        result=num1+num2;
        console.log('the sum of the '+num1+` and `+num2+" is "+result);
      }
      else if(choosie==2){
        if(num1>num2){
          result=num1-num2;
          console.log('the sub of the '+num1+` and `+num2+" is "+result);
        }
        else{
          result=num2-num1;
          console.log('the sub of the '+num1+` and `+num2+" is "+result);
        }
      }
      else if(choosie==3){
         result=num2*num1;
          console.log('the multiplecation of the '+num1+` and `+num2+" is "+result);
      }
      else if(choosie==4){
           if(num1>num2){
          result=num1/num2;
          console.log('the div of the '+num1+` and `+num2+" is "+result);
        }
        else{
          result=num2/num1;
          console.log('the div of the '+num1+` and `+num2+" is "+result);
        }
      }
      else{
        console.log("you enter a wrong choosie"); 
      }
    })
  })
})