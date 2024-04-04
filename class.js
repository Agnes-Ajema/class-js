//write a javascript program to create a class called "person" with properties for names, age and country include a method the "person" class and display their details.
class person{
    constructor(name,age,country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    displayDetails(){
        console.log(`Name:${this.name},Age:${this.age},Country:${this.country}`);
    }
}

const person1 = new person("Agnes", 22,"Kenya");


console.log("person1 Details:");
person1.displayDetails();

//write a kotlin program that creates a class "rectangle" with properties for width and height,include a function to calculate the area of the rectangle.
class Rectangle{
    constructor(width,height){
        this.width = width
        this.height = height
    }
    calculateArea(){
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(32, 10)
const area = rectangle.calculateArea();
console.log(`Rectangle Area: ${area}`);