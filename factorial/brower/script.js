document.getElementById("form_submited").addEventListener("submit",(event)=>{
  event.preventDefault();
  let num=document.getElementById("input_text").value;
  let temp=1;
for(let i=num;i>=1;i--){
  temp=temp*i;
}
document.getElementById("demo").innerHTML=num+"factorial is: "+temp;
})
