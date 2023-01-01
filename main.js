audioc = document.getElementById("audiocontrol");
playnice = document.getElementById("noice");
d1 = document.getElementById("date1");
d2 = document.getElementById("date2");
asd = document.getElementById("asd");


count = 0

function playAudio() {
    if (count == 0) {
        audioc.play();
        count = 1;
        playnice.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14"><path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" /></svg>'
    } else {
        audioc.pause();
        count = 0;
        playnice.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14"> <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd"/></svg>'
    }
}

setInterval(() => {
    var d = new Date().toString();
    var a = d.substring(8, 10) + " " + d.substring(4, 7) + " " + d.substring(11, 15);
    var b = d.substring(0, 3);
    d1.innerText = a;
    if(b == "Mon")
        b = "Monday";
    else if(b == "Tue")
        b = "Tuesday";
    else if(b == "Wed")
        b = "Wednesday";
    else if(b == "Thu")
        b = "Thursday";
    else if(b == "Fri")
        b = "Friday";
    else if(b == "Sat")
        b = "Saturday";
    else if(b == "Sun")
        b = "Sunday";
    d2.innerText = b;


})


playAudio();

asd.addEventListener("click", () => {
    if(asd.classList.contains("grayscale")){
        asd.classList.remove("grayscale");
    }
});
playnice.addEventListener("click", playAudio);