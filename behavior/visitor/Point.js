class Point2d {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    accept(visitor) {
         return visitor.point2d(this);
    }
}

class Point3d {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    accept(visitor) {
        return visitor.point3d(this);
    }
}

module.exports = {
    Point2d,
    Point3d
}