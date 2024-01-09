const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'quick');
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, 'slow');
})

Promise.race([promise1, promise2]).then((result) => console.log(result));
