var bone = require('bonescript');

var ZERO = 0;
var ONE = .2;
var TWO = .4;
var THREE = .6;
var FOUR = .8;

/*
The sensor array holds the names of the pins used for analog reads.
The motor array holds objects corresponding to each GPIO for motor control.
Each sensor in its position corresponds to motor it its position. 
*/
var sensor = ['P9_35', 'P9_36', 'P9_37', 'P9_38', 'P9_39', 'P9_40'];
var motor = [
		  {name:'P8_8', rate:0, state:0}, 
		  {name:'P8_10', rate:0, state:0}, 
		  {name:'P8_12', rate:0, state:0}, 
		  {name:'P8_14', rate:0, state:0}, 
		  {name:'P8_16', rate:0, state:0},
		  {name:'P8_18', rate:0, state:0}
		 ];

//Self invoking function that will do the initializations.
(function(){
	//Set all motor GPIOs to output. 
	for (var i = 0; i < motor.length; i++)
	{
		bone.pinMode(motor[i].name, bone.OUTPUT);
	}

}())

/*
This function will register an analog read callback for each sensor.
The callback updates the sensor's corresponding motor's rates.
*/

function checkSensors()
{
	bone.analogRead(sensor[0], function(x){
		x.value > FOUR ? motor[0].rate = FOUR
		: x.value > THREE ? motor[0].rate = THREE
		: x.value > TWO ? motor[0].rate = TWO
		: x.value > ONE ? motor[0].rate = ONE
		: motor[0] = ZERO
	});

	bone.analogRead(sensor[1], function(x){
		x.value > FOUR ? motor[1].rate = FOUR
		: x.value > THREE ? motor[1].rate = THREE
		: x.value > TWO ? motor[1].rate = TWO
		: x.value > ONE ? motor[1].rate = ONE
		: motor[1] = ZERO
	});

	bone.analogRead(sensor[2], function(x){
		x.value > FOUR ? motor[2].rate = FOUR
		: x.value > THREE ? motor[2].rate = THREE
		: x.value > TWO ? motor[2].rate = TWO
		: x.value > ONE ? motor[2].rate = ONE
		: motor[2] = ZERO
	});

	bone.analogRead(sensor[3], function(x){
		x.value > FOUR ? motor[3].rate = FOUR
		: x.value > THREE ? motor[3].rate = THREE
		: x.value > TWO ? motor[3].rate = TWO
		: x.value > ONE ? motor[3].rate = ONE
		: motor[3] = ZERO
	});

	bone.analogRead(sensor[4], function(x){
		x.value > FOUR ? motor[4].rate = FOUR
		: x.value > THREE ? motor[4].rate = THREE
		: x.value > TWO ? motor[4].rate = TWO
		: x.value > ONE ? motor[4].rate = ONE
		: motor[4] = ZERO
	});

	bone.analogRead(sensor[5], function(x){
		x.value > FOUR ? motor[5].rate = FOUR
		: x.value > THREE ? motor[5].rate = THREE
		: x.value > TWO ? motor[5].rate = TWO
		: x.value > ONE ? motor[5].rate = ONE
		: motor[5] = ZERO
	});


}

//Toggle motors set at rate FOUR every 1000 ms.
setInterval(function(){
	for (var i = 0; i < motor.length; i++)
	{
		if (motor[i].rate == FOUR && motor[i].state == 0)
		{
			bone.digitalWrite(motor[i].name, 1);
			motor[i].state = 1;
		}
		else if (motor[i].rate == FOUR && motor[i].state == 1)
		{
			bone.digitalWrite(motor[i].name, 0);
			motor[i].state = 0;
		}
	}
}, 1000);

//Toggle motors set at rate THREE every 500 ms.
setInterval(function(){
	for (var i = 0; i < motor.length; i++)
	{
		if (motor[i].rate == THREE && motor[i].state == 0)
		{
			bone.digitalWrite(motor[i].name, 1);
			motor[i].state = 1;
		}
		else if (motor[i].rate == THREE && motor[i].state == 1)
		{
			bone.digitalWrite(motor[i].name, 0);
			motor[i].state = 0;
		}
	}
}, 500);

//Toggle motors set at rate TWO every 250 ms.
setInterval(function(){
	for (var i = 0; i < motor.length; i++)
	{
		if (motor[i].rate == TWO && motor[i].state == 0)
		{
			bone.digitalWrite(motor[i].name, 1);
			motor[i].state = 1;
		}
		else if (motor[i].rate == TWO && motor[i].state == 1)
		{
			bone.digitalWrite(motor[i].name, 0);
			motor[i].state = 0;
		}
	}
}, 250);

//Toggle motors set at rate ONE every 125 ms.
setInterval(function(){
	for (var i = 0; i < motor.length; i++)
	{
		if (motor[i].rate == ONE && motor[i].state == 0)
		{
			bone.digitalWrite(motor[i].name, 1);
			motor[i].state = 1;
		}
		else if (motor[i].rate == ONE && motor[i].state == 1)
		{
			bone.digitalWrite(motor[i].name, 0);
			motor[i].state = 0;
		}
	}
}, 125);

//Check the sensors for new values every 200 ms.
setInterval(checkSensors, 200);




