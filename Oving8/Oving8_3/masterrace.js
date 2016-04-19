window.addEventListener('load', function() {
    canvas = document.getElementById('the-canvas');
    c = canvas.getContext("2d");
    if(c){
        var img = document.getElementById("masterrace");
        var img2 = document.getElementById("peasant");
        x=canvas.width/2-img.width/2;
        y=canvas.height/2-img.height/2;
        count=0;
        radius=100;
        setInterval(function(){
            c.clearRect (0,0,canvas.width, canvas.height);
            count-=0.04;
            var xx=x+Math.sin(count)*radius;
            var yy=y+Math.cos(count)*radius;
            var xx2=x+Math.sin(count-Math.PI)*radius;
            var yy2=y+Math.cos(count-Math.PI)*radius;
            c.drawImage(img, xx,yy);
            c.drawImage(img2, xx2,yy2);
        }, 5);
    }
}, false);