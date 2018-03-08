let numbers = [1, 2, 3, 4];
let newNumbers = [];
console.log('////step 1////');
let oddNumbers = numbers.filter(i => i % 2 !== 0);
newNumbers = oddNumbers.map(i => i * 2);
console.log("the doubled numbers are: " + newNumbers);
console.log('\n');
let monday = [{
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [{
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);
console.log('////step 2////');
let totalDurations = 0;
tasks.forEach(total => total = totalDurations = totalDurations + total.duration);
console.log("total durations per minutes: " + totalDurations + " min");
//
console.log('////step 3////')
let totalHours = tasks.map(task => task.duration / 60);
console.log(totalHours);
//
console.log('////step 4////')
let newTimes = totalHours.filter(a => a < 2);
console.log(newTimes);
//
console.log('////step 5////')
let hoursRate = totalHours.map(rate => rate * 12);
console.log("rate per hour: " + hoursRate + " €");
let totalIncome = hoursRate.reduce((a, b) => a + b, 0);
console.log("total income: " + totalIncome + " €");
