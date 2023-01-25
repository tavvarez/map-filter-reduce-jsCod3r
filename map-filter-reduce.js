const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Peter', score: 8.6},
    {name: 'Susan', score: 9.4},
    {name: 'Emma', score: 9.1},
]

const greatStudent = student => student.score >= 9
const getScore = el => el.score
const avg = (acc, el, i, array) => {
    if(i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

console.log('A média dos estudantes é de: ')
console.log(
    students
        .filter(greatStudent)
        .map(getScore)
        .reduce(avg)
)