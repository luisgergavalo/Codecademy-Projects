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
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} level.`)
    }
    static pickSubstituteTeacher(substituteTeachers){
        const i = Math.floor(Math.random()*substituteTeachers+1);
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
        super(name,level,numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
}

//Create the third subclass "High School"
class HighSchool extends School{
    constructor(name,level,numberOfStudents){

    }
}