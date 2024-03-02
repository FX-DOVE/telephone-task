 // class observer
class Observer {
    constructor(name) {
        this.name = name;
    }

    notify(action, phoneNumber) {
        if (this.name === 'Observer1') {
            console.log(`${action}: ${phoneNumber}`);
        } else if (this.name === 'Observer2') {
            console.log("thanks for adding new number");
        }
    }
}
// class telephone
class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];

      
    }
 

 // function for adding phone number
    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
        this.notifyObservers('Added', phoneNumber);
        console.log(typeof telephone.phoneNumbers)
       
    }
       // function to check the list of number 
       listPhoneNumbers(phoneNumber) {
        if (this.phoneNumbers.length === 0) {
            console.log('The number list is empty, please add number');
        } else {
            console.log('here is your number list, please choose one to call');
            this.phoneNumbers.forEach(phoneNumber => console.log(phoneNumber));
        }
    }

    
// function for editing phone number
    editPhoneNumber(oldNumber, newNumber) {
        const index = this.phoneNumbers.indexOf(oldNumber);
        if (index > -1) {
            this.phoneNumbers[index] = newNumber;
            this.notifyObservers('Edited', newNumber);
        }
    }
    // function to dial a phone number

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            this.notifyObservers('Now Dialling', phoneNumber);
        } else {
            console.log(`Phone number ${phoneNumber} not found.`);
        }
    }
  // this function is used to addd observer
    addObserver(observer) {
        this.observers.push(observer);
    }
// function to remove observer
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    // function that notifys observer

    notifyObservers(action, phoneNumber) {
        this.observers.forEach(observer => observer.notify(action, phoneNumber));
    }



   
   
}

// Create Telephone instance
const telephone = new Telephone();

// let Create Observer instances
const observer1 = new Observer('Observer1');
const observer2 = new Observer('Observer2');

// Add observers to Telephone
telephone.addObserver(observer1);
// telephone.addObserver(observer2);



//========================== operating keys  ============================//


//  ============================  please uncomment it   to see how it work  ============================//
telephone.addPhoneNumber('3454');  //   call this to add a new phone numbers 

telephone.editPhoneNumber(',');  //  call this to edit the number you want to edit rember to use comma to seperate the teo number

telephone.dialPhoneNumber('');  //  call this to dial the number of your choice

telephone.listPhoneNumbers();   // call this to check all you added number


// =========================================thank you so much ===============================//
