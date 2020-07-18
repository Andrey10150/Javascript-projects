function changeBackgroundColor () {
    var colors = ['red', 'orange', 'yellow','green', 'blue', 'indigo', 'violet'];
    var color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = color;
} 