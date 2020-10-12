const Component = require('../Component');
const Composite = require('../Composite');

const bigBox = new Composite('Box 1x2 m', 20);

const boxWithCat = new Composite('Box 0.5x1 m', 5, new Component('cat', 200));

const smallBox1 = new Composite('Box 1x1 m', 10, new Component('dog', 1000 ), boxWithCat);
const smallBox2 = new Composite('Box 1x1 m', 10, new Component('food', 300));

bigBox.add(smallBox1, smallBox2);


console.log(bigBox.getValue())
