const a = [1,2,3]
const b = a
console.log(b === a)

const c = [...a]
console.log(a === c)

c.push(4)
console.log(a)
console.log(c)

==================

const a = [{ name:'a' }]
const b = [...a]

b[0].mail = 'yanagisawa@ultrasevenstar.com'

console.log(a)
console.log(b)

console.log(a === b)
console.log(a[0] === b[0])

==================

const a = [{ name:'a' }]
const b = [...a]

const c = b.map(v => ({
...v,
mail: '目'
}))

console.log(a)
console.log(b)
console.log(c)

===================

# ソート、スプレッド

process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

const todos = [
{
id: 1,
title: 'Todo 1',
isCompleted: false,
createdAt: '2025-04-10 08:45',
},
{
id: 2,
title: 'Todo 2',
isCompleted: true,
createdAt: '2025-04-12 15:20',
},
{
id: 3,
title: 'Todo 3',
isCompleted: false,
createdAt: '2025-04-09 11:10',
},
{
id: 4,
title: 'Todo 4',
isCompleted: true,
createdAt: '2025-04-11 17:30',
},
{
id: 5,
title: 'Todo 5',
isCompleted: false,
createdAt: '2025-04-13 09:55',
},
];

const sorted = todos.sort((a, b) =>
a.createdAt.localeCompare(b.createdAt, undefined, { numeric: true })
)

console.log(todos)
console.log(sorted)

=======

# ソート、スプレッド構文

process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

const todos = [
{
id: 1,
title: 'Todo 1',
isCompleted: false,
createdAt: '2025-04-10 08:45',
},
{
id: 2,
title: 'Todo 2',
isCompleted: true,
createdAt: '2025-04-12 15:20',
},
{
id: 3,
title: 'Todo 3',
isCompleted: false,
createdAt: '2025-04-09 11:10',
},
{
id: 4,
title: 'Todo 4',
isCompleted: true,
createdAt: '2025-04-11 17:30',
},
{
id: 5,
title: 'Todo 5',
isCompleted: false,
createdAt: '2025-04-13 09:55',
},
];

const sorted = [...todos].sort((a, b) =>
a.createdAt.localeCompare(b.createdAt, undefined, { numeric: true })
)

console.log(todos)
console.log(sorted)
