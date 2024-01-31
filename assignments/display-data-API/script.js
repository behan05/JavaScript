// fetch data from gitHub via API using XMLHttpRequest.

const requestUrl = "https://api.github.com/users/hiteshchoudhary"
const xhr = new XMLHttpRequest(); // single-ton object created using cunstruct method.

xhr.open('GET', requestUrl);
xhr.send()
xhr.onreadystatechange = () => {
    // console.log(xhr);
    if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.responseText);
        const avatar = data.avatar_url;
        const name = data.name;
        const followers = data.followers;
        const following = data.following;
        const location = data.location;
        const bio = data.bio;
        // console.log(data)

        // target to the document tags.
        const gitImg = document.querySelector('#avatar');
        gitImg.innerHTML = `
        <img src="${avatar}" title="${bio}">
        `
        gitImg.addEventListener('click', function () {
            gitImg.style.boxShadow = "1px 1px 1px 1px red"
        })

        const gitName = document.querySelector('#name');
        setTimeout(() => {
            gitName.innerHTML = name;
        },1000)
        gitName.addEventListener('click', function () {
            gitName.style.borderRadius = "8px"
            gitName.style.color = "red"
            gitName.style.boxShadow = "1px 1px 1px 1px red"
        })

        const gitFollowers = document.querySelector('#follower');
        setTimeout(() => {
            gitFollowers.innerHTML = followers;
        },1000)
        gitFollowers.addEventListener('click', function () {
            gitFollowers.style.borderRadius = "8px"
            gitFollowers.style.color = "red"
            gitFollowers.style.boxShadow = "1px 1px 1px 1px red"
        })

        const gitFollowing = document.querySelector('#following');
        setTimeout(() => {
            gitFollowing.innerHTML = following;
        },1000)
        gitFollowing.addEventListener('click', function () {
            gitFollowing.style.borderRadius = "8px"
            gitFollowing.style.color = "red"
            gitFollowing.style.boxShadow = "1px 1px 1px 1px red"
        })

        const gitlocation = document.querySelector('#location');
        setTimeout(() => {
            gitlocation.innerHTML = location;
        },1000)
        gitlocation.addEventListener('click', function () {
            gitlocation.style.borderRadius = "8px"
            gitlocation.style.color = "red"
            gitlocation.style.boxShadow = "1px 1px 1px 1px red"
        })

    }
}

// Adding timeStamp.

function toInsertTime() {
    const watch = document.getElementById('watch')
    const btnStart = document.getElementById('startTime')
    const btnStop = document.getElementById('stopTime')
    let stopTunningTime;

    // start time
    btnStart.addEventListener('click', function () {
        watch.style.borderRadius = "8px"
        watch.style.boxShadow = "1px 1px 1px 1px red"

        // Asynchronous Code.
        stopTunningTime = setInterval(() => {
            const currentTm = new Date();
            watch.innerHTML = currentTm.toLocaleTimeString();
        }, 1000);
    }, false)


    // stop time.
    btnStop.addEventListener('click', () => {
        // Asynchronous Code.
        clearInterval(stopTunningTime);
    })

}

toInsertTime();

