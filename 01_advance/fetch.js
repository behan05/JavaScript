// fetch return promise bydefault.

async function fet() {
    const requestURL = await fetch('https://api.github.com/users/behan05');
    const data = await requestURL.json();
    console.log(data.following);
    let bio = data.bio;
    let bioArr = bio.split(" ");
    bioArr.forEach((item) => {
        console.log(item);
    })
}
fet()