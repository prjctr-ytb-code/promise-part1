const promise1 = Promise.reject('Reject!');
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'quick');
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'slow');
})

Promise.any([promise1, promise2, promise3]).then((result) => {
    console.log(result);
})
