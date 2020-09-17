//since the interface is not implemented in js

class VisitorPoint {
    point2d() {throw new Error('This method must be implemented in the inherited class')}
    point3d() {throw new Error('This method must be implemented in the inherited class')}
}

class DistanceToCenterCord extends VisitorPoint{
    point2d(point) {
        return Math.sqrt(Math.pow(point.x, 2) +  Math.pow(point.y, 2))
    }
    point3d(point) {
        return Math.sqrt(Math.pow(point.x, 2) +  Math.pow(point.y, 2) + Math.pow(point.z, 2))
    }
}

module.exports = {
    DistanceToCenterCord
}