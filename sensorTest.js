var handle = require('bonescript');
var sum = [0,0,0];
var i = 0;
var j = 0;
setInterval(check, 50);

var sensorArray = [	'P9_35', //Left High
			'P9_36', //Right High
			'P9_37', //Left Shoulder
			'P9_38', //Right Low
			'P9_39', //Left Low
			'P9_40'  //Right Shoulder
				];
			
function check()
{
 handle.analogRead(sensorArray[j], distance);
 j++;
 if(j==6){
  j=0;
  console.log(' ');
 }
}

function distance(x)
{
  process.stdout.write('Sensor '+j+': ' + Number((x.value).toFixed(2)) + '	');
}
