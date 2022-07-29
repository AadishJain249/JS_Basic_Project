var countdate = new Date("Oct 14, 2022 00:35:00").getTime();
var x = setInterval(function() {

    var now = new Date().getTime();
    var diff = countdate - now;
    var d = Math.floor(diff / (1000 * 60 * 60 * 24));
    var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((diff % (1000 * 60)) / 1000);
    document.querySelector('.days').innerHTML = d
    document.querySelector('.hours').innerHTML = h
    document.querySelector('.minutes').innerHTML = m
    document.querySelector('.seconds').innerHTML = s

    if (diff < 0) {
        clearInterval(x)
        alert('Time Has expired')
    }

}, 1000);