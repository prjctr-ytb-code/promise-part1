const promise = Promise.resolve('Done!');
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
})

Promise.allSettled([promise, promise2, promise3]).then((results) => {
    results.forEach((result) => {
        console.log(result);
    })
})
