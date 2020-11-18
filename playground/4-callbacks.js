// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => name.length <= 4)

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             lat: 0,
//             long: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })
const addStuff = function (num1, num2, callback) {
    setTimeout(() => {
        const data = num1 + num2
        callback(data)
    }, 2000)
}


addStuff(1,4, (sum) => {
    console.log(sum) // Should print: 5
})
