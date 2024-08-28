const arr =[
    { id: 1, name: "Alice", age: 25, score: 89 },
    { id: 2, name: "Bob", age: 30, score: 72 },
    { id: 3, name: "Charlie", age: 22, score: 95 },
    { id: 4, name: "David", age: 28, score: 68 },
    { id: 5, name: "Eve", age: 35, score: 77 },
    { id: 6, name: "Frank", age: 27, score: 83 },
    { id: 7, name: "Grace", age: 24, score: 91 },
    { id: 8, name: "Hannah", age: 29, score: 55 },
    { id: 15, name: "Oscar", age: 32, score: 88 },
    { id: 9, name: "Ivy", age: 26, score: 65 },
    { id: 10, name: "Jack", age: 31, score: 78 },
    { id: 11, name: "Kara", age: 33, score: 82 },
    { id: 12, name: "Leo", age: 21, score: 85 },
    { id: 13, name: "Mona", age: 23, score: 92 },
    { id: 14, name: "Nina", age: 34, score: 73 },
]
let sorti = arr.sort((a,b) => b.name - a.name)
let sortedByName = arr.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);