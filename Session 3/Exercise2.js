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

const circles_array = [
    createCircle(createPoint(5, 6), 5),
    createCircle(createPoint(4, 1), 4),
    createCircle(createPoint(3, 2), 9),
];

const radiusArray = [circles_array.map(c => c.getRadius())];
console.log(radiusArray)

