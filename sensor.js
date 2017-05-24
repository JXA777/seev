var bone = require('bonescript');

var ZERO = 0;
var ONE = .2;
var TWO = .4;
var THREE = .6;
var FOUR = .8;

var sensor['P9_35', 'P9_36', 'P9_37', 'P9_38', 'P9_39', 'P9_40'];
var motor[
		  {name:'P8_8', rate:0, state:0}, 
		  {name:'P8_10', rate:0, state:0}, 
		  {name:'P8_12', rate:0, state:0}, 
		  {name:'P8_14', rate:0, state:0}, 
		  {name:'P8_16', rate:0, state:0}
		 ];

function checkSensors()
{
	for (var i = 0; i < sensor.length; i++)
	{
		bone.analogRead(sensor[i], function(){
			distance(x, i);});
	}
}

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

setInterval(checkSensors, 200);

function distance(x, sensorNumber)
{
	if (x.value > FOUR)
	{
		motor[sensorNumber].rate = FOUR;
	}
	else if (x.value > THREE)
	{
		motor[sensorNumber].rate = THREE;
	}
	else if (x.value > TWO)
	{
		motor[sensorNumber].rate = TWO;
	}
	else if (x.value > ONE)
	{
		motor[sensorNumber].rate = ONE;
	}
	else
	{
		motor[sensorNumber].rate = ZERO;
	}

}


