function promiseSetTimeout(timer) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, timer * 1000);
    })
}

setTimeout(function () {
    console.log('macro task resolved');
}, 0);

promiseSetTimeout(0).then(function () {
    console.log('micro resolved')
})

