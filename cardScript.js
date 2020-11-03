function img()
{
	if ( typeof img.counter == 'undefined' ) {
        img.counter = 0;
    }
    ++img.counter;
	document.getElementById("content1").innerHTML += "<br> Место обучения - "
	for (let i = 0; i < img.counter; ++i)
	{
		document.getElementById("content1").innerHTML += "точно "
	}
	document.getElementById("content1").innerHTML += "МГТУ \"СТАНКИН\""
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function color()
{
	var str = new String("А если нажать сюда, то тут поменяется цвет текста");
    document.getElementById("color").innerHTML = str.fontcolor(getRandomColor());
}