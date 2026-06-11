/*
Q1
Ek student object banao jisme:
● name
● age
● city
Store ho.
*/

// const Student = {
//     name:"Bob",
//     age:20,
//     city:"Rohtak"
// };

// Q2 Upar wale object ka name print karo.

// console.log(Student.name);
// console.log(Student["name"]);

/*
Q3
Object me greet() method add karo jo print kare:
Hello I am Ram
*/

// Student.greet = function(){
//     console.log("Hello i am Ram");
// }

// Student.greet();

// Q4 Object me isAdult() method banao jo age check kare.

// Student.isAdult = function(age){
//     if(age<18){
//         console.log("adult");
//     }
//     else {
//         console.log("Not a adult");
//     }
// }

// Student.isAdult(15);

// Q5 Object ki sabhi keys print karo.

// const keys = Object.keys(Student);
// console.log(keys);

// Q6 Object ki sabhi values print karo.

// const values = Object.values(Student);
// console.log(values);

// Q7 Check karo ki object me email property hai ya nahi.

// console.log(Student.email !== undefined);
// console.log(Student.hasOwnProperty("email"));
// console.log("email" in Student);

/*
Q8
Object me dynamically property add karo.
student.course = "MERN";
*/

// Student.course = "MERN";
// console.log(Student.course);

// Q9 Object se age property delete karo.

// delete Student.age;

// Q10 Ek object ka clone banao.

// const S_details = {...Student};
// console.log(S_details);

// const S_details = Object.assign({}, Student);
// console.log(S_details);

// Q11 Ek object banao jisme showName() method ho aur this.name print kare

// const Student = {
//     name: "Harry",
//     showName(){
//         return this.name;
//     }
// }

// console.log(Student.showName());

/*
Q12
Ek object me:
name = "Ram"
store karo aur method se uppercase print karo.
*/

// const obj = {
//     name:"Ram",
//     upperCase(){
//         return this.name.toUpperCase();
//     }
// }

// console.log(obj.upperCase());

/*
Q13
Object me do methods banao:
deposit()
withdraw()
Aur balance update karo.
*/

// const bank = {
//     balance:0,
//     deposit(d_money){
//         this.balance = d_money;
//         console.log("balance after deposit ",this.balance);
//     },
//     withdraw(w_money){
//         this.balance = this.balance - w_money;
//         console.log(`balance left ${this.balance}`);
//     }
// }

// bank.deposit(200);
// bank.withdraw(50);

/*
Q14
Predict Output
const user = {
name:"Ram",
show(){
console.log(this.name);
}
};
user.show();
*/

// Output -> Ram

/*
Q15
Predict Output
const user = {
name:"Ram",
show: () => {
console.log(this.name);
}
};
user.show();
*/

// Output -> undefined

/*
Q16
Student constructor function banao.
Parameters:
name
age
*/

// function detail(name, age){
//     this.name = name;
//     this.age = age;
// }

// Q17 3 student objects create karo constructor se.

// const s1 = new detail("Ram",20);
// const s2 = new detail("Shyam",25);
// const s3 = new detail("Karan",29);

// Q18 Constructor function me greet() method add karo

// detail.prototype.greet = function(){
//     console.log("Hello");
// }

// s1.greet();

/*
Q19
Predict Output
function User(name){
this.name=name;
}
const u1=new User("Ram");
console.log(u1.name);
*/

// Output -> Ram

/*
Q20
Car constructor function banao.
Properties:
brand
price
*/

// function Car(brand, price){
//     this.brand = brand;
//     this.price = price;
// }

// const car1 = new Car("Tata", 250000);

// Q21 Student constructor banao aur prototype me greet() method add karo.

// function Student(name,age){
//     this.name = name;
//     this.age = age;
// }

// Student.prototype.greet = function() {
//     console.log("Good Morning");
// }

// const s1 = new Student("Ram",20);
// s1.greet();

/*
Q22
Check karo:
obj.__proto__ === Student.prototype
*/

// console.log(s1.__proto__ === Student.prototype)

// Output -> true

// Q23 Prototype me isAdult() method add karo.

// Student.prototype.isAdult = function(){
//     if(this.age < 18){
//         console.log("Adult");
//     }
//     console.log("Not a adult");
// }

// s1.isAdult()

/*
Q24
Predict Output
function User(){}
User.prototype.sayHi=function(){
console.log("Hi");
}
const u1=new User();
u1.sayHi();
*/

// Output -> Hi

// Q25 Prototype me course property add karo.

// Student.prototype.course = function(){
//     this.course = "MERN";
//     console.log(this.course)
// }

// s1.course();

/*
Q26
Check karo:
u1.hasOwnProperty("course")
Output kya hoga?
*/

// console.log(s1.hasOwnProperty("course"));
// Output -> true

/*
Q27
Check karo:
"course" in u1
Output kya hoga?
*/

// console.log("course" in s1);
// Output -> true

/*
Q28
Prototype chain draw karo:
const arr=[]
*/

/* Solution ->
arr ([])  
   ⬇️ __proto__  
Array.prototype  
   ⬇️ __proto__  
Object.prototype  
   ⬇️ __proto__  
null
*/

/*
Q29
Animal object banao.
Method:
eat()
*/

// const Animal = {
//     eat(){
//         console.log("eating...")
//     }
// }

// Animal.eat()

/*
Q30
Animal se dog object create karo using:
Object.create()
*/

// const dog = Object.create(Animal);
// dog.eat();

// Q31 Dog me bark() method add karo.

// dog.bark = function(){
//     console.log("barking....")
// }

// dog.bark();

/*
Q32
Predict Output
const animal={
eat(){
console.log("Eating");
}
};
const dog=Object.create(animal);
dog.eat();
*/

// Output -> Eating

/*
Q33
Student class banao.
Properties:
name
age
*/

class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

// Q34 Class me greet() method add karo.

Student.prototype.greet = function(){
    console.log("Hello");
}

const s1 = new Student("Bob", 28);
s1.greet();

// Q35 Class me isAdult() method add karo.

Student.prototype.isAdult = function(){
    if(this.age<18){
        console.log("Adult");
    }
    console.log("Not a adult");
}
s1.isAdult()

// Q36: 3 objects create karo class se.

const s2 = new Student("Jatin", 13);
const s3 = new Student("Nishant", 4);
const s4 = new Student("Abhishek", 2);

/*
Q37
Animal class banao.
Method:
eat()
*/

class animal{
    eat(){
        console.log("eating...");
    }
}

// Q38 Dog class banao jo Animal ko inherit kare.

class Dog extends animal{

}

/*
Q39
Dog class me bark() method add karo.
*/

Dog.prototype.bark = function(){
    console.log("barking...")
}

// Q40
// Create:
// const d = new Dog();
// Call:
// d.eat();
// d.bark();
// Expected Output explain karo.

const d = new Dog();
d.eat();
d.bark();

/* output ->
eating...
barking...
*/

/* Explanation->
const d = new Dog(); → This creates a new object d whose prototype is Dog.prototype.

d.eat(); → Calls the eat() method defined in the class, so it prints "eating...".

d.bark(); → Calls the bark() method defined in the class, so it prints "barking...".

So the object d inherits both methods from the Dog class, and when you call them, the expected output is exactly those two lines.
*/