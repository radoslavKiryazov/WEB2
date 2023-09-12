function createPoint(x, y) {
    return {
        getX: () => x,
        getY: () => y,
        moveTo(newX, newY) {
            x = newX
            y = newY
        },
        toString: () => `[${x},${y}]`,
    };
}

function createCircle(center, radius) {
    return {
        getCenterX: () => center.getX,
        getCenterY: () => center.getY,
        getRadius: () => radius,
        moveCenterTo(x, y) {
            center.moveTo(x, y)
        },
        toString: () => `[Center :${center},Radius: ${radius}]`,
    };
}

console.log(createCircle(createPoint(1, 2), 4).toString())
// → Circle(Center: [1,2], Radius: 4)