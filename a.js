let images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
];
let i = 0;
let timer;
let len = images.length
document.getElementById('slide').src = images[0];

function slider() {
    document.getElementById('slide').src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    timer = setTimeout("slider()", 1000);
    return timer;
}
const stop = (() => clearTimeout(timer))
let img = document.getElementById('slide');
img = images[0];

function next() {
    if (i <= images.length - 1) {
        i++
    }
    if (i === images.length) {
        images[i] = images[i - len]

    }
    // i++
    // if (i === images.length) {
    //     i = images.length - 1;
    // }

    document.getElementById('slide').src = images[i];
}

function prev() {
    if (i <= len - 1) {
        i--
    }
    if (i < 0) {
        images[i] = images[i + len]

    }
    // i--;
    // if (i < 0) {
    //     i = 0;
    // }
    document.getElementById('slide').src = images[i];
}