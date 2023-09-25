function OnClick(){
    var data = prompt("Write your name: ")
    const myHeading = document.querySelector("h1");
    myHeading.textContent = "Welcome, " + data;
}
let a = 0;
const imgElement = document.querySelector("img");



function buttonClick(){
   if(imgElement.src.match("logo.png")){
 imgElement.setAttribute("src","logo2.png");
}else {imgElement.setAttribute("src","logo.png")
      }

}

const img = document.querySelector("img");
img.addEventListener("click",buttonClick);
