// promise => it is for eventual completion of task. it is solution of calling hell.

// it is a solution of Callback hell.
/*
const fetchData1 = new Promise((resolve, reject) => {
    // console.log('i am promise!');
    resolve({ name: "behan", age: 24 })
})
fetchData1.then((res) => {
    console.log(res);
})

const fetchData2 = new Promise((resolve, reject) => {
    const response = false;
    if (response) {
        resolve('fetching data completed!')
    } else {
        reject('Error: something went wrong!')
    }
})

// promise chain
fetchData2
.then((res) => {
    console.log(res);
})
.catch((error) => {
    console.log(error);
})
*/


// function asyncfunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data1');
//             resolve('success!')
//         }, 2000)
//     });
// }

// function asyncfunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data2');
//             resolve('success!')
//         }, 2000)
//     });
// }


// // promise chain.
// console.log('fetching data1...');
// asyncfunc1()
// .then((res) => {
//     console.log(res);
//     console.log('fetching data2...');

//     asyncfunc2()
//     .then((res2) => {
//         console.log(res2);
//         console.log('fetching data1 again...');

//         asyncfunc1()
//         .then((res) => {
//             console.log(res);
//         })
//     })
// })

// Async-Await => it always return promise. 
// you should not then & catch method at all when use async await.

function promise() {
    return new Promise((resolve, reject) => {

        console.log('Hey i am trying to fetch data....');

        setTimeout(() => {
            const turn = false;
            if (turn) {
                console.log('data1 printed!');
                resolve('success!')
            } else {
                console.log('trun is false!');
                reject('error something went wrong! try to debug.')
            }

        }, 4000)
    })
}

// IIFE technique use.
(async function () {
    try {
        const acceptResponse = await promise();
        console.log(acceptResponse);
    } catch (error) {
        console.log(error);
    }
})();

