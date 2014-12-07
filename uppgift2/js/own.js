function login()
{
	//Create a prompt to get the user name
	var login_name = prompt("Enter login name");
	if (login_name.length > 0) 
	{
		document.cookie = "userName=" + login_name + "; path=/";
		checkLogin();
	}
}

function checkLogin()
{
	if (getCookie("userName"))
	document.getElementById("login_box").innerHTML = "Logged in User: " + getCookie("userName"); 
}

function getCookie(name)
{
	var cookies = "; " + document.cookie;
	var values = cookies.split("; " + name + "="); //Split the array in two right before the attr. value.
	if(values.length > 1) //Checks that the cookie can be found
	return values.pop().split(";").shift(); //Break out the last part of the array, split it to isolate the value, return the first part.
	else
	return false;
}


//Sets what formfields will be shown based on the referrer.
function formChoice()
{
	if(document.referrer.search("flight") != -1) //Show flight options if the string "flight" is in the referrer
	{
		document.getElementById("formAllergiesToggle").style.display = 'block';
		document.getElementById("formDiseaseToggle").style.display = 'block';
	}
	else if(document.referrer.search("boat") != -1) //Show boat options if the string "boat" is in the referrer
	{
		document.getElementById("formSwimToggle").style.display = 'block';
	}
}

//Kontrollerar att samtliga fält som krävs är ifylda korrekt.
function formCheck()
{
	if
	( 	
		document.getElementById("formInputName").value.length < 2 
		|| 
		document.getElementById("formInputEmail").value.length < 4 
		|| 
		document.getElementById("formInputDeparture").value.length < 4
		|| 
		document.getElementById("formInputReturn").value.length < 4
	)
	
	{
		alert("Ni måste fylla i samtliga fält markerade med *");
		return false;
	}
}

function getFormValue(name)
{
	var values = "&" + window.location.search.substring(1);
	var search = values.split("&" + name + "=")
	
	if(search.length > 1)
	return search.pop().split("&").shift().replace("%40", "@");
	else
	return "NULL";	
}