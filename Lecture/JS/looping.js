// for

// for(declaration; condition; increment/decrement){
    // task
// }

// Print 10 consecutive numbers
// for(let i = 1; i<=10;i++){
//     console.log(i)
// }


// while

// while(condition){
// task;
// increment/decrement
// }

// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// do...while

// do{
//     // task
// }while(condition)
// let i = 11;
// do{
//     console.log(i);
//     i++;
// }while(i<=10)


// for...of

let arr = [1,2,3,4,5]
// for(let values of arry){
//     console.log(values)
// }

// for(let values of arr){
//     console.log(values)
// }

// for...in

let obj = {
    name : "Kartik",
    rollNo: 56,
    univ: "GLA M"
}

// for(let keys in object){
//     console.log(values)
// }
// for(let keys in obj){
//     console.log(obj[keys])
// }

let students = [
    {
        id: 1,
        name: "Rahul",
        age: 21,
        marks: 85,
        city: "Delhi"
    },
    {
        id: 2,
        name: "Priya",
        age: 22,
        marks: 92,
        city: "Mumbai"
    },
    {
        id: 3,
        name: "Amit",
        age: 20,
        marks: 45,
        city: "Mathura"
    },
    {
        id: 4,
        name: "Sneha",
        age: 23,
        marks: 76,
        city: "Agra"
    },
    {
        id: 5,
        name: "Vikas",
        age: 19,
        marks: 35,
        city: "Jaipur"
    }
];


for(let values of students){
    if(values.age%2 == 0){
        values.isEligible = true
    }else{
        values.isEligible = false
    }
}

for(let values of students){
    console.log(values)
}