//Dynamic nature of an object
// let person = {
//     firstName: 'John',
//     lastName: 'Bruce'
// }
// console.log(person);
// person.firstName = 'Peter'
// console.log(person);

//Add a new proprty to the current object
// person.age = 20
// console.log(person);


//construcor property
// function NewRecord(name) {
//     this.name = name
// }
// let person1 = new NewRecord('John');
// let person2 = {name : 'Henk'};
//console.log(person2);
//constructor propety
// console.log(person1.constructor === NewRecord);//True
//It is the same as using instaceof
// console.log(person1 instaceof NewRecord );//True
//console.log(person2.constructor == NewRecord);

//Functions are object
// let person = {
//     firstName: 'Unathi',
//     lastNmae: 'Gcetywa',
//     hrs: 120,
//     rate: 500,
//     salary: function() {
//         return this.hrs * this.rate
//     }
// }
// console.log(person.salary());
// person.salary()

//looping through an object
// let laptop = {
//     make: 'Dell',
//     cpu: '3Ghz',
//     ram: '16GB'
// }
// for(let key in laptop){
//     console.log(key, '', laptop[key]);
// }
// for (const keyName in laptop) {
//     console.log(laptop[key])
// }

//another way to display keys using a loop
// console.log(Object.keys(laptop));
// console.log(Object.values(laptop));

//if you want display keys inside of an object
// Object.keys(laptop).forEach( (key)=> {
//     console.log(`${key} -> ${laptop[key]}`)
// })
//another alternative to use when we want to display the values
// Object.values(laptop).forEach( (value)=>{
//     console.log(`${value}`);
// })

//cloning an object using (spread op,Object.assign(),JSON.parse(),)
// let car1 = {
//     make: 'Toyota',
//     year: 2023
// }
// let car2 = car1
// console.log("==car1==");
// console.log(car1);
// consooole.log("==car2==");
// console.log(car2);
// console.log("Change the value of car2");
// car2.year = 2024
// console.log(car1, car2);

//spread operator, Object.assign(), JSON.parse()
//spread operator(changes only the value of ca2 because they have two separate properties)
//assignment operator(changes both the values of car1 and and car2,they have one property)
// let car2 = {...car1}
// console.log(car1, car2);
// console.log("Change the value of car2");
// car2.year =2024
// console.log(car1, car2);

// //Object.assign()
// let car3 = Object.assign({}, car1)
// console.log("===car3===");
// console.log(car3);
// console.log("JSON.parse()");
// let car4 = JSON.parse(JSON.stringify(car1))
// console.log(car4);
//JSON.parse()

//string method
// let firstName = 'Unathi'
// console.log(firstName.split("").reverse().join(""));


//math method
// let numbers = [2, 4, 11, 1]
// let a = 3
// let b =2
// console.log(`Highest number: ${Math.max(...numbers)}`);
// console.log(`Lowest number: ${Math.min(...numbers)}`);

//charAt()
//
// let text = 'Hello World'
// let letter = text.charAt(0);
// console.log(text)
// console.log(letter)

//endsWith()
// let text = 'Unathi Gcetywa'
// let results = text.endsWith('Gcetywa')
// console.log(results)

//includes()
// let text = 'Unathi Gcetywa, you are an aspring web developer'
// let results = text.includes('Gcetywa')
// console.log(results)

//lastIndexOf()
// let text = 'Unathi young girl'
// let results = text.lastIndexOf('young')
// console.log(results)

//indexOf()
