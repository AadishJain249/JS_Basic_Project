let str = ''
let len = 0
let flag = true
quote = () => {
    let url = 'https://api.quotable.io/random';
    fetch(url).then(response => {
        if (response.ok == false)
            throw Error(response.statusText)
        return response.json()
    }).then((data) => {
        str = data.content
        console.log(str);
    }).catch((response) => {
        console.log("sorry");
    })
}
call = () => {
    if (flag) {
        quote()
        str = ''
        flag = false
    }

    document.querySelector(".type p").innerHTML = str.substring(0, len) + '<span>\u25AE</span>';
    if (len++ != str.length) {
        setTimeout(call, 100)
    } else {
        setTimeout(call, 2000)
        len = 0
        str = ''
    }
}
window.addEventListener('load', call);