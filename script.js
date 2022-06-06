let myNodelist = document.getElementsByTagName("li");
  // CHANGE MOOD
  let moon = document.querySelector(".moon");
  let sun = document.querySelector(".sun");
  let header = document.querySelector("header");
  let article = document.querySelector("article section");
  let footer = document.querySelector("footer");
  let body = document.querySelector("body");
  let drag = document.querySelector(".drag");
  let input = document.querySelector("#input")
  let li = document.querySelector("li")
  let text = document.querySelectorAll(".text")
  function change(){
      
      if(sun.style.display === "none"){
          sun.style.display = "block";
          moon.style.display = "none"
          console.log("cho");
          body.style.backgroundColor = "var(--Very-Dark-Blue)";
          header.style.backgroundImage = "url(images/bg-mobile-dark.jpg)";
          footer.style.backgroundColor = "var(--Very-Dark-Desaturated-Blue)";
          article.style.backgroundColor = "var(--Very-Dark-Desaturated-Blue)";
          drag.style.backgroundColor = "var(--Very-Dark-Desaturated-Blue)";
          input.style.backgroundColor = "var(--Very-Dark-Desaturated-Blue)";
          li.style.backgroundColor = "var(--Very-Dark-Desaturated-Blue)"
      }else{
          sun.style.display = "none";
          moon.style.display = "block";
          console.log("chw");
           body.style.backgroundColor = "var(--Light-Grayish-Blue)";
           header.style.backgroundImage = "url(images/bg-mobile-light.jpg)";
          footer.style.backgroundColor = "var(--Very-Light-Gray)";
          article.style.backgroundColor = "var(--Very-Light-Gray)";
          drag.style.backgroundColor = "var(--Very-Light-Gray)";
          input.style.backgroundColor = "var(--Very-Light-Gray)"  
          // article.children.style.color = "var(--Very-Dark-Blue)";
          li.style.backgroundColor = "var(--Very-Light-Gray)"
      }

      if(matchMedia("(min-width:1300px)").matches && sun.style.display === "none"){
            header.style.backgroundImage = "url(images/bg-desktop-light.jpg)"
      }else{
        header.style.backgroundImage = "url(images/bg-desktop-dark.jpg)"
      }
  }

  moon.addEventListener("click", change);
  sun.addEventListener("click", change)
// document.addEventListener('DOMContentLoaded', function(){
    
// Create a "close" button and append it to each list item

// for (let i = 0; i < myNodelist.length; i++) {
//   let span = document.createElement("img");
//   span.setAttribute("src", "images/icon-cross.svg");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
//   let check = document.createElement("input");
//   check.setAttribute("type", "checkbox");
//   check.setAttribute("value", " ");
//   check.className = "check";
//   myNodelist[i].appendChild(check)
// }

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let number = 0;

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
    document.querySelector(".span").innerHTML = number--;
  }
}
 
// using the enter key as the function caller

document.querySelector("input").onkeypress = (e) => {
if(e.keyCode === 13 ){           
     let input = document.querySelector("input").value;
     
     

    // console.log("accac")
// Create a new list item when clicking on the "Add" button
  let li = document.createElement("li");  
  let inputValue = document.getElementById("input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  this.li
  if (inputValue === '') {
    alert("You must write something!");
    // document.querySelector(".span").innerHTML = number--;
  } else {
    document.querySelector("ul").appendChild(li);
    document.querySelector(".span").innerHTML = number++;
  }
  document.getElementById("input").value = "";
  document.querySelector(".span").innerHTML = number;
  
  let span = document.createElement("img");
  span.setAttribute("src", "images/icon-cross.svg");
  span.className = "close";
  li.appendChild(span);
  li.style.fontSize = "16px";
//   console.log(li.childNodes)
//   for the list
function listChange(){
    if(sun.style.display === "none"){
        li.style.backgroundColor = "var(--Very-Light-Gray)"
        li.style.color = "black"
    }else{
        li.style.backgroundColor = "var(--Very-Dark-Desaturated-Blue)"
        li.style.color = ""
    }
}

moon.addEventListener("click", listChange);
sun.addEventListener("click", listChange)

//   CREATE CHECKBOX
  let checkbox = document.createElement("span");
    checkbox.className = "checkbox"
  let check = document.createElement("img");
  check.setAttribute("src", "images/icon-check.svg");
  checkbox.appendChild(check);
  check.className = "check";
  li.appendChild(checkbox);
  li.style.padding = "15px 45px";
//   li = "";
//   li = localStorage.getItem(li);
//   li = localStorage.setItem("listItem", li)
//   li.firstChild.style.borderRadius = "5px 5px  0 0";
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
      document.querySelector(".span").innerHTML = number-- ;
    }
    
         function chek(){
            if(check.style.display === "block"){
                checkbox.style.backgroundImage = "none";
                li.style.textDecoration = "none";
                check.style.display = "none"
                console.log("who dey")
            }else{
                checkbox.style.backgroundImage = "var(--Check-Background)";
                check.style.display = "block"
                li.style.textDecoration = "line-through";
                console.log("bulu")
            }
  
        }
        checkbox.addEventListener("click", chek);
        
}  
    

    function clearLine(){
        if(li.style.textDecoration === "line-through"){
            let div = li;
            div.style.display = "none";
            console.log("sss")
        }
    }
    document.querySelector(".clear").addEventListener("click", clearLine);
    
    function showAll(){
        if(li.style.textDecoration === "line-through" || li.style.textDecoration === " none"){
            let div = li;
            div.style.display = "flex"
            console.log("ssss")
        }else{
            console.log("witch")
        }
    }
    document.querySelector(".all").addEventListener("click", showAll)

    function showActive(){
        if(li.style.textDecoration === "line-through"){
            let div = li;
            div.style.display = "none"
            console.log("ssss")
        }else{
            console.log("witch")
        }
    }
    document.querySelector(".active").addEventListener("click", showActive)
}}
// })