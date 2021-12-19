//Create the parent class "School"
class School{
    constructor(name,level,numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents
    }
    set numberOfStudents(number){
        if (Number.isInteger(number)){
            return this._numberOfStudents = number;
        }else{
            console.log(`Invalid input: ${number}, must input a number.`);
        }
    }
    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} level.`);
    }
    static pickSubstituteTeacher(substituteTeachers){
        const i = Math.floor(Math.random()*substituteTeachers.length);
        return substituteTeachers[i];
    }
}

//Create the first subclass "Primary School"
class PrimarySchool extends School{
    constructor(name,level,numberOfStudents,pickUpPolicy){
        super(name,level='primary',numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }
    get pickUpPolicy(){
        return this._pickUpPolicy
    }
}

//Create the second subclass "Middle School"
class MiddleSchool extends School{
    constructor(name,level,numberOfStudents,sportsTeams){
        super(name,level='middle',numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
}

//Create the third subclass "High School"
class HighSchool extends School{
    constructor(name,level,numberOfStudents,sportsTeams){
        super(name,level='high',numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
        return this._sportsTeams;
    }
}

//Instance of the PrimarySchool class
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury','',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

console.log(lorraineHansbury.quickFacts());

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

//Instance of the HighSchool class
const alSmith = new HighSchool('Al E. Smith','',415,['Baseball','Basketball','Volleyball','Track and Field']);

console.log(alSmith.level);
console.log(alSmith.sportsTeams);
