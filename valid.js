function validate(){

 var name=document.getElementById('1').value;
 var email=document.getElementById('2').value;
 var num=document.getElementById("3").value;
 var loc=document.getElementById("4").value;
 var feed=document.getElementById("5").value;
if(name==" ")
  {
    alert('plaese provide your name!');
  }
if(loc==" ")
  {
    alert('plaese provide your location!');
  }
if(feed==" ")
  {
    alert('plaese provide feedback!');
  }

   else if(num==" "||num.length!=10||isNaNa(num))
   {
    alert('please provide valid mobile number')
    
   } 

   var atpos=email.indexOf("@");
   var dotpos=email.indexOf(".");
   dotposLast=email.lastIndexOf(".");

if(email==""||atpos<1||dotpos<=atpos+2||dotposLast+2>=email.length)
{
alert("Please provide correct email id");

}

   
}
