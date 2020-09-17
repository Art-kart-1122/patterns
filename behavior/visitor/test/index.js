const {Point2d, Point3d} = require('../Point');
const {DistanceToCenterCord} = require('../Visitor');


const points = [new Point2d(1, 2), new Point3d(3,4,5),
    new Point2d(3, 2), new Point3d(3,3,5),
    new Point2d(4, 2), new Point3d(3,4,1)];


const distance = points.map(point => {
    return point.accept(new DistanceToCenterCord)
})

console.log(distance)