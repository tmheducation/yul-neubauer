input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    music.playMelody("C D E D C5 A F C5 ", 120)
})
