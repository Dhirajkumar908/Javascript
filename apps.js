// document.onkeydown = function(e) {
//     console.log("key code is:", e.keyCode)
//     if (e.keyCode == 37) {
//         boy = document.querySelector('.boy')
//         boy.classlist.Add('animationboy')
//         setTimeout(() => {
//             boy.classlist.remove('animateboy')
//         }, 700);

//     }
// }

// //practice
// /*
// var fname = 'ashish'
// var lname = 'menariya';

// function fullname(fname, lname) {
//     return `${fname} ${lname}`;

// }
// let hello = `hello ${fullname(fname,lname)}`;
// document.write(hello)
// console.log(hello)*/

// // let welcome =function(){
// //     return " hello thief";
// // }
// // console.log(welcome('yahoo baba '))
// // function sum(name, ...args) {

// //     console.log(name, args);

// //     let sum = 0;
// //     for (let i in args) {
// //         sum += args[i]
// //     }
// //     console.log(name, sum);
// // }

// var obj = {
//     name: 'dhiraj',
//     course: "b.tch"

// };

// var obj2 = {
//     age: 25

// };

// var obj3 = {...obj, ...obj2 };

// console.log(obj);
// console.log(obj2);
// console.log(obj3);

// ///Object Literals
// let name = " rani";
// let course = 'B.tech';

// var obj = {
//     name,
//     course

// };
// console.log(obj)

// /////////////////
// let n = "student";
// var obj = {
//     [n + "name"]: "dhiraj ",
//     course: "b.tech",
//     'detail show' () {
//         return `${this.studentname} is student of ${this.course}`
//     }
// }
// console.log(obj);
// console.log(obj['detail show']());

// ////////////////
// let name = " dhiraj";
// let course = "Btech";

// function student(name, course) {
//     return { name, course };
// };
// console.log(student(name, course));

// const jonas = {
//     firstName: 'Dhiraj',
//     lastName: 'kumar',
//     birthyear: 2000,
//     job: 'coder',
//     friends: ['ram', 'mohan', 'gita'],
//     hasLicence: true,
//     // calcAge: function(birthyear) {
//     //     return 2037 - birthyear;
//     //}

// };
// console.log(jonas.calcAge(2000));
// console.log(jonas['calcAge'](2000));
/**
 for each of them, create an object with properties for 
theire full name ,mass , and height 
(mark miller and john smith)
 */
// const mark = {
//     fullname: 'mark miller',
//     mass: 78,
//     height: 1.87,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height;
//         return this.bmi;
//     }
// };

// const john = {
//     fulname: 'john smith',
//     mass: 80,
//     height: 1.78,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height;
//         return this.bmi;
//     }
// };
// mark.calcBMI()
// john.calcBMI()
// console.log(mark.bmi);
// console.log(john.bmi);

// /*
// john smith bmi (41.7) is height than mark miller (44.9) */
// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullname} Bmi(${mark.bmi})
//      is higher than ${john.fulname} BMI(${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fulname} BMI(${john.bmi})
//     is higher than ${mark.fullname} BMI(${mark.bmi})`)

// }

// ///////////////////////
// const dhiraj = ['john', 'apple',
//     2020 - 1999, 'techer', ['sita', 'gita', 'babota']
// ];

// for (let i = 0; i < dhiraj.length; i++) {

//     if (typeof dhiraj[i] !== 'string') countinue;

//     console.log(dhiraj[i], typeof dhiraj[i]);
// }

// for (let i = 0; i < dhiraj.length; i++) {

//     if (typeof dhiraj[i] !== 'number') break;

//     console.log(dhiraj[i], typeof dhiraj[i]);
// }

// ///////////////
// const dhiraj = [
//     'john',
//     'apple',
//     2020 - 1999,
//     'techer', ['sita', 'gita', 'babota']
// ];
// for (let i = dhiraj.length - 1; i >= 0; i--) {
//     console.log(dhiraj[i])
// }
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(dhiraj[exercise]);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`lefting weight repetiton ${rep}`)
//     }
// }
////////////////
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('loop is about to end ....')
// }
const calctip = function(bill) {
    return bill >= 50 && bill <= 300 ? (bill = 8.15) : (bill = 0.2);
};
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bill.length; i++) {
    const tip = calctip(bill[i]);
    tips.push(tip);
    total.push(tip + bill[i]);
}

console.log(bill, tips, total);

const calcaverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum=sum+arr[i]
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
};
console.log(calcaverage([4, 6, 5, 2, 3]));
console.log(calcaverage(total));
console.log(calcaverage(tips));

///////////////////////////
function myevent() {
    var x = 10;
    var y = 140;
    document.write(
        "Reach Your Audience When Theyre On The Move Through Salesforce Email Studio. Highly Scalable Whilst Still Maintaining 1-To-1 Relationships. Request A Demo Today! Watch Free Demo Videos. Talk To An Expert. Real-Time Interactions."
    );
}
document.getElementById("mybtn").oncontextmenu = myevent;

function boysover() {
    //var name = prompt();
    //alert(" Hey Don't Click On me");
}
document.getElementById("boys").onmousemove = boysover;