window.addEventListener('load', function() {
    canvas = document.getElementById('the-canvas');
    c = canvas.getContext("2d");
    if(c){

        var img = document.getElementById("doge");
        c.drawImage(img,200,150);
    }
}, false);