
	function addNumbers() 
	{
		var xNum;
		var yNum;
		var isValid=true;
		var result;
		
		reset();
		
		// Get the inputs, and validate
		xNum = parseInt(document.getElementById("xNumber").value);
		yNum = parseInt(document.getElementById("yNumber").value);
		
		if(validateInputs(xNum, yNum))
		{
			result = xNum + yNum
			document.getElementById("result").innerHTML = xNum + " plus " + yNum + " is " + result;
		}
	}
	
	function minusNumbers() 
	{
		var xNum;
		var yNum;
		var isValid=true;
		var result;
		
		reset();
		
		// Get the inputs, and validate
		xNum = parseInt(document.getElementById("xNumber").value);
		yNum = parseInt(document.getElementById("yNumber").value);
		
		if(validateInputs(xNum, yNum))
		{
			result = xNum - yNum
			document.getElementById("result").innerHTML = xNum + " minus " + yNum + " is " + result;
		}
	}
	
	function validateInputs(xNumber, yNumber)
	{
		var validNumber=true;
		
		if (isNaN(xNumber))
		{
			document.getElementById("xNumber_error").style.display="inline";
			validNumber=false;
		}
		
		if (isNaN(yNumber))
		{
			document.getElementById("yNumber_error").style.display="inline";
			validNumber=false;
		}
		
		return validNumber;
    }
	
	function reset()
	{
		document.getElementById("xNumber_error").style.display="none";
		document.getElementById("yNumber_error").style.display="none";
		document.getElementById("result").innerHTML = "";
	}
