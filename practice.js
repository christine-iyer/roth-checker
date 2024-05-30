const grades = [75, 50, 90, 80, 65,95]

const average = grades.reduce((total, grade) => total + grade, 0) / grades.length

console.log(average.toFixed())