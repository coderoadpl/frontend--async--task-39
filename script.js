const promise1 = new Promise((resolve, reject) => setTimeout(() => reject('promise 1'), 1000))
const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve('promise 2'), 2000))
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve('promise 3'), 3000))

promise1
    .then((data) => console.log('promise 1', data))
    .catch((error) => console.log('promise 1 rejection', error))

promise2
    .then((data) => console.log('promise 2', data))
    .catch((error) => console.log('promise 2 rejection', error))

promise3
    .then((data) => console.log('promise 3', data))
    .catch((error) => console.log('promise 3 rejection', error))

const promise = Promise.any([
    promise1,
    promise2,
    promise3,
])
    .then((data) => console.log('promise any', data))
    .catch((error) => {
        console.log('promise any rejection')
        console.dir(error)
    })