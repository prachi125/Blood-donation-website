function fun()
{
	if(document.getElementById('bg').value=="select"){
		alert("Please select blood")
	}
	else if(document.getElementById('c').value=="select"){
		alert("Please select your country")
	}
		else if(document.getElementById('s').value=="select"){
		alert("Please select your state")
	}
			else if(document.getElementById('d').value==""){
		alert("Please enter your district")
	}
				else if(document.getElementById('city').value==""){
		alert("Please enter your city")
	}
	else
	{
		alert("Sorry! we haven't find any blood donor on your location")
	}
}