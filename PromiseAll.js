const promise = Promise.reject('Error!');
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
})

Promise.all([promise, promise2, promise3]).then((values) => console.log(values));
