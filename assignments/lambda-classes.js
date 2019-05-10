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

const inst1 = new Instructor({
    name: 'Gab',
    location: 'Cabrejas',
    age: 45,
    gender: 'male',
    specialty: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Dont forget the homies'
});

// few instance of instructors defined
const inst2 = new Instructor({
    name: 'Josh',
    location: 'American',
    age: 45,
    gender: 'male',
    specialty: 'Flexbox',
    favLanguage: 'Python',
    catchPhrase: 'Own the stuff'
});

// testing an instance of instructor with demo method
console.log(inst1.demo('great subject'));

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
            return console.log(element);
        });
    };
}

// few instance of Student defined
const student1 = new Student({
    name: 'Haja',
    location: 'France',
    age: 45,
    gender: 'male',
    previousBackground: 'Finance',
    className: 'WebEU2',
    favSubjects: ['CSS', 'JS', 'React']
});

const student2 = new Student({
    name: 'Ali',
    location: 'Baba',
    age: 27,
    gender: 'Unknow',
    previousBackground: 'Magic',
    className: 'MagicEU2',
    favSubjects: ['Tricks', 'illusion']
});

const student3 = new Student({
    name: 'Maria',
    location: 'Carrey',
    age: 37,
    gender: 'female',
    previousBackground: 'Artist',
    className: 'RockEU2',
    favSubjects: ['Lyrics', 'Show', 'TV']
});

// testing student instance 
console.log(student2.listsSubjects());
//testing instructor instance with grad methode passing a student object as an arguments
console.log(inst1.grad(student3, 'another great subject'));

class ProjectManagers extends Instructor{
    constructor(pmAttr){
        super(Instructor);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;    
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// few instance of PMs defined
const pm1 = new ProjectManagers({
    name: 'Sorin',
    location: 'Chis',
    age: 35,
    gender: 'male',
    specialty :'Front-end',
    favLanguage : 'German',
    catchPhrase : 'Gotcha',   
    gradClassName:'CS1',
    favInstructor: 'Josh'
});

const pm2 = new ProjectManagers({
    name: 'Delba',
    location: 'De Oliveira',
    age: 25,
    gender: 'female',
    specialty :'Back-end',
    favLanguage : 'English',
    catchPhrase : 'You got this',
    gradClassName:'CS2',
    favInstructor: 'Sean'
});

// Testing instance of PMs
console.log(pm2.debugsCode(student1, 'really great project'));
console.log(pm2.standUp('WebEU2'));