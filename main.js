(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) d(t);
  new MutationObserver((t) => {
    for (const n of t)
      if (n.type === "childList")
        for (const u of n.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && d(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(t) {
    const n = {};
    return (
      t.integrity && (n.integrity = t.integrity),
      t.referrerPolicy && (n.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : t.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function d(t) {
    if (t.ep) return;
    t.ep = !0;
    const n = p(t);
    fetch(t.href, n);
  }
})();
VANTA.CLOUDS({
  el: "#sexcandy",
  mouseControls: !0,
  touchControls: !0,
  gyroControls: !1,
  minHeight: 200,
  minWidth: 200,
  skyColor: 12737671,
  cloudColor: 15898262,
  cloudShadowColor: 15255401,
  sunColor: 16777215,
  sunGlareColor: 14732496,
  sunlightColor: 15589067,
  speed: 1.4,
});
var i = 0;
let f = document.getElementById("prev"),
  y = document.getElementById("next");
document.getElementById("play");
let m = document.getElementById("plaa");
document.getElementById("spec");
let r = document.getElementById("audiocontrol"),
  o = document.getElementById("imagechanger"),
  a = document.getElementById("mainname"),
  l = document.getElementById("artistname"),
  e = 1,
  s = {
    0: {
      image: "./Assets/Images/wannabeyours.png",
      name: "Wanna be yours",
      artist: "Arctic Monkeys",
      src: "./Assets/Music/wannabeyours.mp3",
    },
    1: {
      image: "./Assets/Images/yestoheaven.jpg",
      name: "Yes to Heaven",
      artist: "Lana Del Rey",
      src: "./Assets/Music/Heaven.mp3",
    },
    2: {
      image: "./Assets/Images/dieforyou.jpg",
      name: "Die for you",
      artist: "Joji",
      src: "./Assets/Music/Die for you.mp3",
    },
    3: {
      image: "./Assets/Images/surething.jpg",
      name: "Sure thing",
      artist: "Miguel",
      src: "./Assets/Music/surething.mp3",
    },
    4: {
      image: "./Assets/Images/violet.jpg",
      name: "The Color Violet",
      artist: "Tory Lanez",
      src: "./Assets/Music/Violet.mp3",
    },
    5: {
      image: "./Assets/Images/snap.jpg",
      name: "Snap",
      artist: "Rosa Linn",
      src: "./Assets/Music/Snap.mp3",
    },
  };
y.addEventListener("click", function () {
  e == 5
    ? ((o.src = s[e].image),
      (a.innerHTML = s[e].name),
      (l.innerHTML = s[e].artist),
      (r.src = s[e].src),
      i == 0 ? r.pause() : r.play(),
      (e = (e + 1) % 6))
    : ((o.src = s[e].image),
      (a.innerHTML = s[e].name),
      (l.innerHTML = s[e].artist),
      (r.src = s[e].src),
      i == 0 ? r.pause() : r.play(),
      e++);
});
let g = 0;
f.addEventListener("click", function () {
  g == 0 && ((e = 5), (g = 1)),
    e == 0
      ? ((o.src = s[e].image),
        (a.innerHTML = s[e].name),
        (l.innerHTML = s[e].artist),
        (r.src = s[e].src),
        i == 0 ? r.pause() : r.play(),
        (e = (e - 1) % 6))
      : ((o.src = s[e].image),
        (a.innerHTML = s[e].name),
        (l.innerHTML = s[e].artist),
        (r.src = s[e].src),
        i == 0 ? r.pause() : r.play(),
        e--);
});
m.addEventListener("click", function () {
  i == 0
    ? (r.play(),
      (m.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z" clip-rule="evenodd" />
  </svg>`),
      (i = 1))
    : (r.pause(),
      (m.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd" />
  </svg>`),
      (i = 0));
});
