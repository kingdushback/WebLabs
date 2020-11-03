function RetVal(arg) 
{
	return arg;
}

function Sum(a, b)
{
	return a + b;
}

function ArrSqr(arr)
{
	if (arr == undefined)
	{
		let defArr = [1, 2, 'a', 5];
		arr = defArr;
	}
	for (let i = 0; i < arr.length; ++i)
	{
		if (typeof arr[i] != 'number' || arr[i] == NaN)
		{
			arr[i] = 0;
		}
		arr[i] *= arr[i];
		document.getElementById("arrSlot").innerHTML += arr[i] + " ";
	}
	document.getElementById("arrSlot").innerHTML += "<br>";
	return arr;
}