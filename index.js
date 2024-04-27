//OBJECT
/*let user1: {
    name: "Ayesha",
    age: 24,
    role: "Student",
}=
{
name: "Ayesha",
age: 24,
role: "Student",
};
console.log(user1.age);*/
//Nested Object 1 obj. k andar ek or object
let user1 = {
    name: "Ayeshsa",
    age: 24,
    role: "Student",
    Class: {
        name: "Finance",
        roomNo: 12,
    }
};
console.log(user1.Class.roomNo);
export {};
