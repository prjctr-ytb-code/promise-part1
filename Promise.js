const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Done!');
    }, 1000);
})

myPromise
    .then((result) => console.log(`Fulfilled: ${result}`))
    .catch((error) => console.log(`Rejected: ${error}`))
    .finally(() => console.log('End!'));
