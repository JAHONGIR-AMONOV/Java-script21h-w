// for (let i = 5; i >= 1; --i) {
//     for(let k = 1; k <= i; k++) {
//         document.write(' *')
//     }
//     document.write('<br/>')
// }


// let products = [
//     {
//         type: "milk",
//         title: "moloko"
//     },
//     {
//         type: "alcohol",
//         title: "vodka"
//     },
//     {
//         type: "fruits",
//         title: "apple"
//     },
//     {
//         type: "milk",
//         title: "cheese"
//     },
//     {
//         type: "alcohol",
//         title: "vine"
//     },
//     {
//         type: "fruits",
//         title: "banana"
//     },
// ]

// const categories = [
//     {
//         type: "milk",
//         count: 0,
//         names: []
//     },
//     {
//         type: "alcohol",
//         count: 0,
//         names: []
//     },
//     {
//         type: "fruits",
//         count: 0,
//         names: []
//     },
// ]

// for(item of products) {
//     if(item.type === "milk") {
//         categories[0].names.push('item')
//     } else if(item.type === "alcohol") {
//         categories[1].names.push('item')
//     } else if(item.type === "fruits") {
//         categories[2].names.push('item')
//     } 
// }

// categories[0].count = categories[0].names.length
// categories[1].count = categories[1].names.length
// categories[2].count = categories[2].names.length

// console.log(categories);

let companies = [
    {
        id: 1,
        name: "Jaxa nosfrush",
        tax: 12,
        expenses: [30, 200, 1400]
    },
    {
        id: 2,
        name: "Ramiz mashennik",
        tax: 18,
        expenses: [400, 600, 800]
    },
    {
        id: 3,
        name: "Kama restorator",
        tax: 12,
        expenses: [200, 20, 400]
    },
]

// for(let item of companies) {
//     const total = item.expenses.reduce((a, b) => a + b)

//     console.log(total, item.name);
// }

let totalExpenses = 0;

for(let item of companies) {
    let total = 0;
    for(let expense of item.expenses) {
        total += expense;
    }
    totalExpenses += total;
    console.log(`${item.name}: ${total}`);
}

console.log(`Общая сумма расходов ${totalExpenses}`);