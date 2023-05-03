input.onGesture(Gesture.LogoUp, function () {
    bear.change(LedSpriteProperty.Direction, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    bear.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    bear.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    bear.change(LedSpriteProperty.X, -1)
})
let bear: game.LedSprite = null
let honey = game.createSprite(randint(0, 4), randint(0, 4))
bear = game.createSprite(3, 3)
basic.forever(function () {
	
})
