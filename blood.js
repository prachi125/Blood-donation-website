function demo(){

 var bg=document.getElementById('bg').value;
 var a=document.getElementById('age').value;
 var c=document.getElementById("mobile").value;
if(bg=="1")
  {
    alert('plaese select blood group')
  }
  else if(a=="")
  {
    alert('Please enter your age')
  }
   else if(isNaN(a)||a.length!=2 || a<10){
      alert('Age should be in number and in between 10 to 99');
    }
   else if(c=="")
   {
    alert('Enter mobile number')
   } 
   else if(isNaN(c)||c.length!=10){
      alert('Mobile number should contain 10 digits');
    }
}
