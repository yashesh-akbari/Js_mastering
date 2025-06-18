// notes:
// above 90 then a grade 
// above 80 then b grade 
// above 70 then c grade 
// above 60 then d grade 
// above 50 then e grade
// below 50 then f grade

let readline=require("readline");

let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

function result(marks){
  console.log(`good job you got Grade of `+marks);
}

rl.question("Enter your marks:",(grade)=>{
  if(grade>=90 && grade<=100){
    result("A");
  }else if(grade>=80 && grade<90){
    result("B");
  }
  else if(grade>=70 && grade<80){
    result("C");
  }
  else if(grade>=60 && grade<70){
    result("D");
  }
  else if(grade>=50 && grade<60){
    result("E");
  }
   else if(grade>=0 && grade<50){
    result("F");
  }
  
  else{
    console.log("please enter marks in numbers between 0 to 100 nothing else");
  }
  rl.close();
})