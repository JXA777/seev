#!/usr/bin/python
import subprocess
from multiprocessing import Process
import threading
import Adafruit_BBIO.GPIO as GPIO
from time import sleep
OpenCV_Button = False
def initialization():
        print "Initializing Program"
        subprocess.call("mplayer -ao alsa:device=hw=1  ../TextToSpeech/wav_files/initialize.wav", shell = True)
        GPIO.setup("GPIO0_7", GPIO.IN) #Pin P9_42 configured as GPIO to toggle Crosswalk Detection Application

if __name__ == '__main__':
	print "Starting Program"
	initialization()
        sensorProcess = subprocess.Popen(["node", "../Web Dashboard/server-sensor.js"]) #Starts Sensor-Motors-Web dashboard application
        var = 1
        while var == 1:
                GPIO.wait_for_edge("GPIO0_7", GPIO.BOTH) #Blocks Code until Button is Toggled
                if GPIO.input("GPIO0_7"): 
                        if OpenCV_Button == True:
                                print "Exiting  Crosswalk Detection Application"
                                openCVProcess.kill() #Kills Crosswalk Detection Safely
                                subprocess.call("mplayer -ao alsa:device=hw=1  ../TextToSpeech/wav_files/exit.wav", shell = True)
                                OpenCV_Button = False
                                sleep(1/1000)
                else:
                        if OpenCV_Button == False:
                                print "Beginning  Crosswalk Detection Application"
			        subprocess.call("mplayer -ao alsa:device=hw=1  ../TextToSpeech/wav_files/begin.wav", shell = True)
                                openCVProcess = subprocess.Popen("../Vision/a.out") #Starts up Crosswalk Detection Application
                                OpenCV_Button = True
                                sleep(1/1000)





