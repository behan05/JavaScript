// update user info on button one by one.

function fetchData() {
    return new Promise((resolve, reject) => {
        const requestUrl = "https://api.github.com/users/behan05"
        const xhr = new XMLHttpRequest();
        xhr.open('GET', requestUrl);

        // onreadystatechange property can track the state. 
        xhr.onreadystatechange = () => {

            // readystate property can display the current state.
            if (xhr.readyState === 4) {

                // converting string into object.
                const data = JSON.parse(xhr.responseText);
                let respondByServer = true;

                if (respondByServer) {
                    resolve(data)
                } else {
                    reject('ERROR: something went wrong check your entered URL.')
                };
            };
        };
        xhr.send()

    })
}

async function promise() {
    const data = await fetchData();
    const avatar = data.avatar_url;
    const name = data.name;
    const followers = data.followers;
    const following = data.following;
    const location = data.location;
    const publicRepos = data.public_repos;


    (function () {
        const imgBox = document.getElementById('imgBox');
        imgBox.innerHTML = `
        <img src="${avatar}" style="width: 260px;height: 240px;margin-top: 20px;">
        `
        let name1 = document.getElementById('name');
        let followers1 = document.getElementById('followers');
        let following1 = document.getElementById('following');
        let publicRepos1 = document.getElementById('public_repos');
        let location1 = document.getElementById('location');

        // name1.classList.add('button');
        // followers1.classList.add('button');
        // following1.classList.add('button');
        // publicRepos1.classList.add('button');
        // location1.classList.add('button');

        setTimeout(() => {
            name1.innerText = name;
            setTimeout(() => {
                followers1.innerText = followers;
                setTimeout(() => {
                    following1.innerHTML = following;
                    setTimeout(() => {
                        publicRepos1.innerHTML = publicRepos;
                        setTimeout(() => {
                            location1.innerHTML = location;
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)

    })();

}

promise()


