function fun()
{
	var password=document.getElementById('3').value;
	if(document.getElementById('1').value=="Login as"){
		alert("Please specify wheater you are a doctor or a patient")
	}
	else if(document.getElementById('2').value=="")
		alert("Please enter your username")
	else if(password=="")
		alert("Please enter your password")
	else if(password.length<8){
		alert('Password should contain at least 8 or more characters')
	}
	else{
		if(document.getElementById('1').value=="Doctor")
		alert("Welcome doctor")
	else if(document.getElementById('1').value=="Patient")
		alert("Welcome to blood donation camp")
	}
}

function fun1()
{
	var password1=document.getElementById('3').value;
	if(document.getElementById('1').value=="Register as"){
		alert("Please specify wheater you are a doctor or a patient")
	}
	else if(document.getElementById('2').value=="")
		alert("Please enter a username")
	else if(password1=="")
		alert("Please enter a password")
		else if(password1.length<8){
		alert('Password should contain at least 8 or more characters')
	}
	else if(document.getElementById('4').value!=document.getElementById('3').value){
		alert("Password didn't match correctly")
	}
	else{
		if(document.getElementById('1').value=="Doctor")
		alert("You are now registered as doctor")
	else if(document.getElementById('1').value=="Patient")
		alert("You are now registered as patient")
	}
}
