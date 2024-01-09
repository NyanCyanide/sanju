(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) o(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const d of t.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && o(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function o(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = i(e);
    fetch(e.href, t);
  }
})();
VANTA.FOG({
  el: "#background-love",
  mouseControls: !1,
  touchControls: !0,
  gyroControls: !1,
  minHeight: 200,
  minWidth: 200,
  highlightColor: 1903175,
  midtoneColor: 721025,
  baseColor: 515316,
  blurFactor: 0.5,
  speed: 2.8,
});
let r = document.getElementById("counter"),
  m = document.getElementById("add"),
  f = document.getElementById("sub"),
  c = document.getElementById("warning1"),
  l = document.getElementById("warning2"),
  a = document.getElementById("warning3"),
  u = document.getElementById("warning4"),
  g = document.getElementById("submission1"),
  h = document.getElementById("submission");
g.addEventListener("click", function (s) {
  var n = document.getElementById("asd").value,
    i = { data: n, date: new Date() };
  if (n.length != 0) {
//     var o = window.prompt("Enter passcode :");
//     o == "smb" &&
      firestore
        .collection("message")
        .add(i)
        .then(function (e) {
          console.log("Document written with ID: ", e.id);
        })
        .catch(function (e) {
          console.error("Error adding document: ", e);
        }),
      s.preventDefault(),
      (document.getElementById("asd").value = ""),
      u.classList.remove("hidden"),
      setTimeout(function () {
        u.classList.add("hidden");
      }, 5e3);
  }
});
h.addEventListener("click", function (s) {
  var n = document.getElementById("food1").value,
    i = document.getElementById("food2").value,
    o = document.getElementById("food3").value,
    e = {
      breakfast: n,
      lunch: i,
      dinner: o,
      count: parseInt(document.getElementById("counter").innerText),
      date: new Date(),
    };
  if (n.length != 0 && i.length != 0 && o.length != 0) {
//     var t = window.prompt("Enter passcode :");
//     t == "smb" &&
      firestore
        .collection("food")
        .add(e)
        .then(function (d) {
          console.log("Document written with ID: ", d.id);
        })
        .catch(function (d) {
          console.error("Error adding document: ", d);
        }),
      s.preventDefault(),
      (document.getElementById("food1").value = ""),
      (document.getElementById("food2").value = ""),
      (document.getElementById("food3").value = ""),
      (r.innerText = 0),
      a.classList.remove("hidden"),
      setTimeout(function () {
        a.classList.add("hidden");
      }, 5e3);
  }
});
m.addEventListener("click", function () {
  parseInt(r.innerText) < 10
    ? ((r.innerText = parseInt(r.innerText) + 1),
      c.classList.add("hidden"),
      l.classList.add("hidden"))
    : c.classList.contains("hidden") && c.classList.remove("hidden");
});
f.addEventListener("click", function (s) {
  parseInt(r.innerText) > 0
    ? ((r.innerText = parseInt(r.innerText) - 1),
      l.classList.add("hidden"),
      c.classList.add("hidden"))
    : l.classList.contains("hidden") && l.classList.remove("hidden");
});
