//conceptual example

class Bank {
   hasBacklog() {
       //....
       //get all record from DB and define them
       return false
   }
}

class Police {

    //other logic
    //............
    getByName(name) {
        const data = [];
        //......
        //add all record in Police DB with this name
        return data
    }

    isNegative(acciedent) {
        //....
        //define is negative accident
        return false
    }

    hasNegativeAccident(name) {
       const accidents = this.getByName(name);
       return !accidents.every(accident => !this.isNegative(accident))
    }
}


class Hospital {

    //other logic
    //............

    getByName(name) {
        const data = [];
        //......
        //add all record in Hospital DB with this name
        return data
    }

    isCriticalIllnesses(illness) {
        //....
        //define is critical illness
        return false
    }

    hasCriticalIllnesses(name) {
        const illnesses = this.getByName(name);
        return !illnesses.every( illness=> !this.isCriticalIllnesses(illness))
    }
}


module.exports = {
    Bank,
    Police,
    Hospital
}