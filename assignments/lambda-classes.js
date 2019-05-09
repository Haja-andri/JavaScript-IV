// CODE here for your Lambda Classes

// Person Class (Base class for Lambda School)
class Person{
    //constructor for the Person attributs
    constructor(personAttr){
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }
    // method prototype
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(InstAttr){
        super(InstAttr); // Inherits from Person attributs
        // Instructor sopecific attributs
        this.specialty = InstAttr.specialty;
        this.favLanguage = InstAttr.favLanguage;
        this.catchPhrase = InstAttr.catchPhrase;
    }
    // Methods
    demo(subject){
        return `Today we are learning about ${subject}`;
    };
    grad(student, subject){
      return `${student.name} receives a perfect score on ${subject}`  
    };
}

class Student extends Person{
    constructor(stuAttr){
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;        
    }
    // the methods of student
    listsSubjects(){
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    };
}

const fred = new Student({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    previousBackground: 'Science',
    className: 'WebEU2',
    favSubjects: ['CSS', 'JS', 'React']
});

console.log(fred.listsSubjects());

