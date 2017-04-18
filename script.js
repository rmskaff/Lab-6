
function convertTemp(temp,unit){
if (unit==="C"){
  console.log((temp-32)*(5/9));
} else if (unit ==="F"){
  console.log(((temp*9)/5)+32);
}
}
  convertTemp(212, "C");//100
  convertTemp(32, "C");//0
  convertTemp(65, "C");//18.333
  convertTemp(0, "C");//32s
