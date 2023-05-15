input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 120)
    basic.pause(5000)
    pins.servoWritePin(AnalogPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
})
