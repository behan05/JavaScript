// callback hell => nested callback, it is problem solve by promise.

function getData(dataId, nextGetData) {
    setTimeout(() => {
        console.log("data ", dataId);
        if (nextGetData) {
            nextGetData()
        }
    }, 2000)
}

// Callback hell code. now you can seen its very difficult to understand. so we have better approach to solve this problem that is called promise.

getData(1, () => {
    console.log('getting data2....');
    getData(2, () => {
        console.log('getting data3...');
        getData(3, () => {
        console.log('getting data4....');
        getData(4)
    })
    })
}) 