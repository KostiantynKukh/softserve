//MLB

class MajorLeauge {
    constructor (team1, team2, team3, team4, team5) {
        this.team1 = team1;
        this.team2 = team2;
        this.team3 = team3;
        this.team4 = team4;
        this.team5 = team5;
    }
}
class AmericanLeague extends MajorLeauge {
    designatedHitter (){
    }
}
class NationalLeague extends MajorLeauge {
}
class AmericanLeagueEast extends AmericanLeague {
}
class AmericanLeagueCentral extends AmericanLeague {
}
class AmericanLeagueWest extends AmericanLeague {
}


// Warhammer

let d = {
    hq: {},
    troops: {},
    elites: {},
    amountPts: 750,
    amountUnits: 0,
}

class Unit {
    constructor(type, name, price, arsenal = null, squad = null) {
        this.type = type;
        this.name = name;
        this.price = price;
        this.arsenal = arsenal;
        this.squad = squad;
    }

    add() {
        let types;
        switch (this.type) {
            case 'hq': types = d.hq; break;
            case 'troops': types = d.troops; break;
            case 'elities': types = d.elities; break;
            default: types = ['other type'];
        }
        
        types.name = this.name;
        types.price = this.price;
        types.arsenal = this.arsenal;

        d.amountPts -= this.price - (this.arsenal ? this.arsenal.price : 0);
        d.amountUnits ++;
        // new Detachment().create();
    }

}

// class Detachment {
//     constructor (hq, troops, elities, amountPts, amountUnits) {
//         this.hq = hq;
//         this.troops = troops;
//         this.elities = elities;
//         this.amountPts = amountPts;
//         this.amountUnits = amountUnits;
//     }
   
// }

let captain = new Unit('troops', 'captain', 78, null);
captain.add();
console.log(captain);

console.log(d);

