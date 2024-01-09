date_play = {
  Sat: "Saturday",
  Sun: "Sunday",
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
};

month_play = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

song_list = {
    0 : {'image' : './assets/images/1.jpeg', 'song' : './assets/songs/1.mp3', 'name': 'Dandelions', 'artist' : 'Ruth B', 'gradientfrom': 'from-gray-400', 'gradientvia' : 'via-slate-800', 'gradientto':  'to-slate-400'},
    1 : {'image' : './assets/images/2.jpeg', 'song' : './assets/songs/2.mp3', 'name': 'Golden Hour', 'artist' : 'JVKE', 'gradientfrom': 'from-yellow-400', 'gradientvia' : 'via-yellow-800', 'gradientto':  'to-yellow-600'},
    2 : {'image' : './assets/images/3.jpeg', 'song' : './assets/songs/3.mp3', 'name': 'Shinunoga E-Wa', 'artist' : 'Fujii Kaze', 'gradientfrom': 'from-slate-400', 'gradientvia' : 'via-pink-800', 'gradientto':  'to-gray-400'},
    3 : {'image' : './assets/images/4.jpeg', 'song' : './assets/songs/4.mp3', 'name': 'Sugar', 'artist' : 'Maroon 5', 'gradientfrom': 'from-blue-700', 'gradientvia' : 'via-red-800', 'gradientto':  'to-purple-600'},
    4 : {'image' : './assets/images/5.jpeg', 'song' : './assets/songs/5.mp3', 'name': 'Blinding Lights', 'artist' : 'The Weeknd', 'gradientfrom': 'from-slate-800', 'gradientvia' : 'via-red-600', 'gradientto':  'to-slate-600'},
    5 : {'image' : './assets/images/6.jpeg', 'song' : './assets/songs/6.mp3', 'name': 'Blue Bird', 'artist' : 'Akano', 'gradientfrom': 'from-blue-300', 'gradientvia' : 'via-indigo-400', 'gradientto':  'to-blue-600'},
    6 : {'image' : './assets/images/7.jpeg', 'song' : './assets/songs/7.mp3', 'name': 'Night Changes', 'artist' : 'One Direction', 'gradientfrom': 'from-black', 'gradientvia' : 'via-slate-300', 'gradientto':  'to-black'},
    7 : {'image' : './assets/images/8.jpeg', 'song' : './assets/songs/8.mp3', 'name': 'Night We Met', 'artist' : 'Lord Huron, Phoebe Bridgers', 'gradientfrom': 'from-sky-700', 'gradientvia' : 'via-gray-600', 'gradientto':  'to-red-600'},
    8 : {'image' : './assets/images/9.jpeg', 'song' : './assets/songs/9.mp3', 'name': 'Replay', 'artist' : 'Iyaz', 'gradientfrom': 'from-slate-400', 'gradientvia' : 'via-yellow-600', 'gradientto':  'to-blue-600'},
    9 : {'image' : './assets/images/10.jpeg', 'song' : './assets/songs/10.mp3', 'name': 'Rokudenashi', 'artist' : 'Some Japanese artist', 'gradientfrom': 'from-gray-800', 'gradientvia' : 'via-blue-600', 'gradientto':  'to-slate-600'},
    10 : {'image' : './assets/images/11.jpeg', 'song' : './assets/songs/11.mp3', 'name': 'Sunflower', 'artist' : 'Post Malone', 'gradientfrom': 'from-red-700', 'gradientvia' : 'via-black', 'gradientto':  'to-purple-600'},
    11 : {'image' : './assets/images/12.jpeg', 'song' : './assets/songs/12.mp3', 'name': 'Titanium', 'artist' : 'David Guetta, Sia', 'gradientfrom': 'from-red-700', 'gradientvia' : 'via-pink-600', 'gradientto':  'to-purple-600'},

}

datey = document.getElementById("date_edit");
timey = document.getElementById("time_edit");
speci = document.getElementById("special");
specj = document.getElementById("spec1");
speck = document.getElementById("spec3");
specl = document.getElementById("spec4");
specm = document.getElementById("spec5");
specn = document.getElementById("spec6");
speco = document.getElementById("spec7");
specp = document.getElementById("spec8");
audioc = document.getElementById("audiocontrol");
prev = document.getElementById("contrprev")
next = document.getElementById("contrnext")

control1 = document.getElementById("contr");
key1 = 0
current_song = 0;
audioc.src = song_list[current_song]['song']

specj.src = song_list[current_song]['image'];
specm.src = song_list[current_song]['image'];
specn.src = song_list[current_song]['song'];
speco.innerHTML = song_list[current_song]['name'];
specp.innerHTML = song_list[current_song]['artist'];

prev.addEventListener("click", () => {
  
  temp_song = current_song;
  if(current_song == 0){
    current_song = 11;
  }
  else {
    current_song = current_song - 1;
  }
  specj.src = song_list[current_song]['image']
  specm.src = song_list[current_song]['image']
  audioc.src = song_list[current_song]['song']
  speci.classList.remove(song_list[temp_song]['gradientfrom'])
  speci.classList.add(song_list[current_song]['gradientfrom'])
  speci.classList.remove(song_list[temp_song]['gradientvia'])
  speci.classList.add(song_list[current_song]['gradientvia'])
  speci.classList.remove(song_list[temp_song]['gradientto'])
  speci.classList.add(song_list[current_song]['gradientto'])

  speco.innerHTML = song_list[current_song]['name']
  specp.innerHTML = song_list[current_song]['artist']
  if (key1 == 1) {
    audioc.play();
  }
  else {
    audioc.pause();
  }
})

next.addEventListener("click", () => {
  temp_song = current_song;
  current_song = (current_song + 1)%12;
  specj.src = song_list[current_song]['image']
  specm.src = song_list[current_song]['image']
  audioc.src = song_list[current_song]['song']
  speco.innerHTML = song_list[current_song]['name']
  specp.innerHTML = song_list[current_song]['artist']
  speci.classList.remove(song_list[temp_song]['gradientfrom'])
  speci.classList.add(song_list[current_song]['gradientfrom'])
  speci.classList.remove(song_list[temp_song]['gradientvia'])
  speci.classList.add(song_list[current_song]['gradientvia'])
  speci.classList.remove(song_list[temp_song]['gradientto'])
  speci.classList.add(song_list[current_song]['gradientto'])
  if (key1 == 1) {
    audioc.play();
  }
  else {
    audioc.pause();
  }
})

specj.addEventListener("click", () => {
  speci.classList.remove("bg-gradient-to-br");
  speci.style =
    "background : url('./assets/image.jpeg'); background-repeat : no-repeat; background-position : top; background-size : 130vw 100vh; background-attachment : fixed;";
  specj.classList.add("invisible");
  speck.classList.remove("invisible");
  specl.classList.remove("justify-center");
  specl.classList.remove("items-center");
  specl.classList.add("text-left");
  specl.classList.add("ml-4");

});

control1.addEventListener("click", () => {
    if(key1 == 0){
      audioc.play()
        control1.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-12 h-12"
      >
        <path
          fill-rule="evenodd"
          d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
          clip-rule="evenodd"
        />
      </svg>`;
        key1 = 1;
    }
    else {
      audioc.pause();
      control1.innerHTML = `
      <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-12 h-12"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clip-rule="evenodd"
                />
              </svg>`
      key1 = 0;
    }
})

speck.addEventListener("click", () => {
  speci.style = "";
  speci.classList.add("bg-gradient-to-br");
  specj.classList.remove("invisible");
  speck.classList.add("invisible");
  specl.classList.remove("text-left");
  specl.classList.remove("ml-4");

  specl.classList.add("justify-center");
  specl.classList.add("items-center");

});

setInterval(() => {
  var curr_data = new Date().toString();
  let t = curr_data.slice(8, 10);
  if (t == "01" || t == "21" || t == "31") {
    t = t + "st";
  } else if (t == "02" || t == "22") {
    t = t + "nd";
  } else if (t == "03" || t == "23") {
    t = t + "rd";
  } else {
    t = t + "th";
  }
  var actual =
    date_play[curr_data.slice(0, 3)] +
    ", " +
    t +
    " " +
    month_play[curr_data.slice(4, 7)] +
    " " +
    curr_data.slice(11, 15);

  var curr_time = curr_data.slice(16, 21);
  datey.innerHTML = actual;
  timey.innerHTML = curr_time;
}, 1000);
