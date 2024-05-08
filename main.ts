function gosouth () {
    for (let gs = 0; gs <= 3; gs++) {
        for (let gx = 0; gx <= 4; gx++) {
            led.plotBrightness(gx, gs, led.pointBrightness(gx, gs + 1))
        }
    }
}
function weststars () {
    for (let index = 0; index <= 4; index++) {
        if (6 < randint(0, 10)) {
            led.plotBrightness(0, index, 20 * randint(3, 10))
        } else {
            led.unplot(0, index)
        }
    }
}
function southstars () {
    for (let index2 = 0; index2 <= 4; index2++) {
        if (6 < randint(0, 10)) {
            led.plotBrightness(index2, 4, 20 * randint(3, 10))
        } else {
            led.unplot(index2, 4)
        }
    }
}
function gowest () {
    for (let gs2 = 0; gs2 <= 4; gs2++) {
        for (let gx2 = 0; gx2 <= 3; gx2++) {
            led.plotBrightness(4 - gx2, gs2, led.pointBrightness(3 - gx2, gs2))
        }
    }
}
input.onGesture(Gesture.LogoUp, function () {
    dir = 0
})
input.onGesture(Gesture.TiltLeft, function () {
    dir = 3
})
function northstars () {
    for (let index3 = 0; index3 <= 4; index3++) {
        if (6 < randint(0, 10)) {
            led.plotBrightness(index3, 0, 20 * randint(3, 10))
        } else {
            led.unplot(index3, 0)
        }
    }
}
input.onGesture(Gesture.TiltRight, function () {
    dir = 1
})
input.onGesture(Gesture.LogoDown, function () {
    dir = 2
})
function gonorth () {
    for (let gs3 = 0; gs3 <= 3; gs3++) {
        for (let gx3 = 0; gx3 <= 4; gx3++) {
            led.plotBrightness(gx3, 4 - gs3, led.pointBrightness(gx3, 3 - gs3))
        }
    }
}
function eaststars () {
    for (let index4 = 0; index4 <= 4; index4++) {
        if (6 < randint(0, 10)) {
            led.plotBrightness(4, index4, 20 * randint(3, 10))
        } else {
            led.unplot(4, index4)
        }
    }
}
function goeast () {
    for (let gs4 = 0; gs4 <= 4; gs4++) {
        for (let gx4 = 0; gx4 <= 3; gx4++) {
            led.plotBrightness(gx4, gs4, led.pointBrightness(1 + gx4, gs4))
        }
    }
}
let center = 0
let dir = 0
dir = 0
basic.forever(function () {
    center = led.pointBrightness(2, 2)
    led.plot(2, 2)
    basic.pause(100)
    led.plotBrightness(2, 2, center)
    if (dir == 0) {
        northstars()
        gonorth()
    }
    if (dir == 1) {
        eaststars()
        goeast()
    }
    if (dir == 2) {
        southstars()
        gosouth()
    }
    if (dir == 3) {
        weststars()
        gowest()
    }
})
