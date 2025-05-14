input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.SmallDiamond)
    basic.clearScreen()
    currentDie = currentDie + 1
    if (currentDie + 1 > dies.length) {
        currentDie = 0
    }
    basic.showNumber(dies[currentDie])
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.No)
        basic.showIcon(IconNames.Square)
    }
    basic.showNumber(randint(1, dies[currentDie]))
})
let currentDie = 0
let dies: number[] = []
dies = [
4,
6,
10,
20,
100
]
currentDie = 0
