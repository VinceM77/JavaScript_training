const text = document.getElementById("myText");

text.style.marginTop = "200px";
text.setAttribute("style", "margin-top:300px, font-size:24px");

text.classList.add("burly");
text.classList.remove("burly");
text.classList.toggle("burly");

// if(text.classList === "burly"){
//     text.classList.remove("burly")
// }else{
//     text.classList.add("burly")
// }
