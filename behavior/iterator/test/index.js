const Collection = require('../ObjectCollection');


function printAllItem(iterator) {
    while (true) {
        const item = iterator.next();
        if(item.done) break;

        console.log(item.value);
    }
}


const items = new Collection();
items.addItems('item1', 'item2','item3','item4');

const itemsIterator = items.getIterator();
printAllItem(itemsIterator);


const itemsRandomIterator = items.getRandomIterator();
printAllItem(itemsRandomIterator);

