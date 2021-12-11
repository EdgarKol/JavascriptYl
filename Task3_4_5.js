const persons = [{
            name: 'Julia',
            age: 27,
            gender: 'female'
        },
        {
            name: 'Martin',
            age: 45,
            gender: 'male'
        },
        {
            name: 'Taavi',
            age: 17,
            gender: 'male'
        },
        {
            name: 'Emma',
            age: 2,
            gender: 'female'
        },
        {
            name: 'Ricky',
            age: 62,
            gender: 'male'
        }
    ]
    // Task 3
const ageSum = persons.reduce((a, person) => a + person.age, 0);

// Task 4

const boyNames = persons.filter(persons => persons.gender === 'male')
const girlNames = persons.filter(persons => persons.gender === 'female')


const underThirtyBoys = boyNames.filter(function(boyNames) {
    return boyNames.age <= 30
})
const underThirtyGirls = girlNames.filter(function(girlNames) {
    return girlNames.age <= 30
})

// Task 5
const upperCase = persons.map(function(item) {
    for (let key in item) {
        item[key.toUpperCase()] = item[key];
        delete item[key]
    }
    return item
})



console.log(ageSum)
console.log(underThirtyGirls)
console.log(underThirtyBoys)
console.log(boyNames)
console.log(girlNames)