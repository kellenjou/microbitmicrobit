enum RadioMessage {
    message1 = 49434,
    left = 14947,
    riht = 7457,
    right = 32391,
    stirght = 10161,
    stop = 61268,
    red = 30290
}
radio.onReceivedMessage(RadioMessage.stirght, function () {
    mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Back, speed)
})
radio.onReceivedMessage(RadioMessage.red, function () {
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
})
radio.onReceivedMessage(RadioMessage.left, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Right, 200, 100)
})
radio.onReceivedMessage(RadioMessage.right, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Left, 100, 200)
})
let speed = 0
speed = 200
mbit_小车类.RGB_Car_Big(50, 190, 50)
radio.setTransmitPower(7)
radio.setFrequencyBand(83)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendMessage(RadioMessage.left)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
    	
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendMessage(RadioMessage.right)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
    	
    }
    if (input.isGesture(Gesture.Shake)) {
        radio.sendMessage(RadioMessage.stirght)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
    	
    }
    if (input.isGesture(Gesture.ScreenDown)) {
        radio.sendMessage(RadioMessage.red)
    } else {
    	
    }
})
