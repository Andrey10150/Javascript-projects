var count = 0;

function lowerCount() {
    count--;
    update();
}

function addCount() {
    count++;
    update();
}

function update() {
    document.getElementById("counter").innerText = count;
}