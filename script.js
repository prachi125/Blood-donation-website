 function fun(){
           if(document.getElementById('c').value=="India")
           {
               document.getElementById('s1').innerHTML="Punjab";
                document.getElementById('s2').innerHTML="Bihar";
           }
              else if(document.getElementById('c').value=='Nepal')
           {
               document.getElementById('s1').innerHTML="S1";
                document.getElementById('s2').innerHTML="S2";

           }
        
 }
 function fun1()
 {
    if(document.getElementById('s').value=="Bihar")
    {
      document.getElementById('d1').innerHTML="Samastipur";
      document.getElementById('d2').innerHTML="Darbhanga";
    }
    else if(document.getElementById('s').value=="Punjab")
    {
      document.getElementById('d1').innerHTML="D1";
      document.getElementById('d2').innerHTML="D2"
         } 
    else if(document.getElementById('s').value=="S1")
    {
      document.getElementById('d1').innerHTML="N1";
      document.getElementById('d2').innerHTML="N2";
    }
    else if(document.getElementById('s').value=="S2")
    {
      document.getElementById('d1').innerHTML="N3";
      document.getElementById('d2').innerHTML="N4"
    }
 }

 function fun2(){
         if(document.getElementById('d').value=="Samastipur")
    {
      document.getElementById('c1').innerHTML="C1";
      document.getElementById('c2').innerHTML="C2";
    }
        else  if(document.getElementById('d').value=="Darbhanga")
    {
      document.getElementById('c1').innerHTML="C3";
      document.getElementById('c2').innerHTML="C4";
    }
            else  if(document.getElementById('d').value=="D1")
    {
      document.getElementById('c1').innerHTML="C5";
      document.getElementById('c2').innerHTML="C6";
    }
            else  if(document.getElementById('d').value=="D2")
    {
      document.getElementById('c1').innerHTML="C7";
      document.getElementById('c2').innerHTML="C8";
    }
            else  if(document.getElementById('d').value=="N1")
    {
      document.getElementById('c1').innerHTML="C9";
      document.getElementById('c2').innerHTML="C10";
    }
            else  if(document.getElementById('d').value=="N2")
    {
      document.getElementById('c1').innerHTML="C11";
      document.getElementById('c2').innerHTML="C12";
    }
                else  if(document.getElementById('d').value=="N3")
    {
      document.getElementById('c1').innerHTML="C13";
      document.getElementById('c2').innerHTML="C14";
    }
                else  if(document.getElementById('d').value=="N4")
    {
      document.getElementById('c1').innerHTML="C15";
      document.getElementById('c2').innerHTML="C16";
    }
 }

 function fun3()
 {
  if(document.getElementById("bg").value=="Select blood group")
  {
    alert("Please select blood group");
  }
    else if(document.getElementById("c").value=="Select country")
  {
    alert("Please select your country");
  }
     else if(document.getElementById("s").value=="Select state")
  {
    alert("Please select your state");
  }
     else if(document.getElementById("d").value=="Select district")
  {
    alert("Please select your district");
  }
     else if(document.getElementById("city").value=="Select city")
  {
    alert("Please select your city");
  }
  else
  {
    alert("Please Login");
    window.location.href='doclog.html'
  }
 }
