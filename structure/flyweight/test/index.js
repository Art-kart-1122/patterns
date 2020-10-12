const AutoDatabase = require('../AutoDatabase');
const AutoFactory = require('../Auto');


const autoList = new AutoFactory({brand: 'BMW', model: 'X5', color: 'black'},
    {brand: 'Audi', model: 'A6', color: 'white'})

const policeDB = new AutoDatabase();

policeDB.addAutoToDatabase(autoList, 'PL0987', 'Artur Kart', 'Audi', 'A6', 'white' )
    .addAutoToDatabase(autoList, 'PL0984', 'Artur Kart2', 'Audi', 'A6', 'black')
    .addAutoToDatabase(autoList, 'PL0988', 'Artur Kart3', 'BMW', 'X5', 'black')
    .printRecord()
