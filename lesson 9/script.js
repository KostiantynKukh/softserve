// № 1
class User {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.eventList = [];
    }

    getInfo() {
        return {
            name: this.name,
            surname: this.surname,
            email: this.email,
        }
    }

    addEvent(eventObj) {
        this.eventList.push(eventObj);
    }
}

class Event {
    constructor(name, location, price) {
        this.name = name;
        this.location = location;
        this.price = price;
      }
    
      getEvent() {
        return {
            name: this.name,
            location: this.location,
            price: this.price,
        }
      }


}

let kostia = new User('kostia', 'kukh', 'kkuh1993mail').addEvent(new Event());

