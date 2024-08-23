var body, num, array, width, context, logo, myElements, analyser, src, height;

body = document.querySelector('body');

num = 64;

array = new Uint8Array(num * 2);

width = 10;

window.onclick = function () {



    if (!context) {
            body.querySelector('h1').remove();

    for (var i = 0; i < num; i++) {
        logo = document.createElement('div');
        logo.className = 'logo';
        logo.style.background = 'white';
        logo.style.minWidth = width + 'px';
        body.appendChild(logo);
    }    

    myElements = document.getElementsByClassName('logo');
        preparation();
    }
    
    if (audio.paused) {
        audio.play();
        loop();
    } else {
        audio.pause();
    }



}

function preparation() {
    context = new AudioContext();
    analyser = context.createAnalyser();
    src = context.createMediaElementSource(audio);
    src.connect(analyser);
    analyser.connect(context.destination);
    loop();
}

function loop() {
    if(!audio.paused){
        window.requestAnimationFrame(loop);
    }

    array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);

    for (var i = 0; i < num; i++) {
        height = array[i + num];
        myElements[i].style.minHeight = height + 'px';
        myElements[i].style.opacity = 0.008 * height;
    }
}