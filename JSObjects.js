// Challenge 1
// Print all of the students and their cohort.
// Your console should look like the following:
// Name: Remy, Cohort: Jan
// Name: Genevieve, Cohort: March
// Name: Chuck, Cohort: Jan
// Name: Osmund, Cohort: June
// Name: Nikki, Cohort: June
// Name: Boris, Cohort: June

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let data in students){
    for(let i = 0; i < data.length; i++){
        console.log("Name: " + students[data]['name'] + ", " + "Cohort: " + students[data]['cohort'])
    }
}
// Challenge 2
// Print out the below object to match the example.
// Your console should look like the following:

// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for(let data in users){
     console.log(data.toUpperCase())
     for(let i = 0; i < users[data].length; i++){
         last = users[data][i]['last_name'].toUpperCase()
         first = users[data][i]['first_name'].toUpperCase()
         console.log(i+1 + " - " + last + ", " + first + " - " + (last.length + first.length))
     }
 }