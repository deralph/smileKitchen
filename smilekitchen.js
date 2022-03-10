let nav = document.getElementById("nav")
let name = document.getElementById("name").value
let email = document.getElementById("email").value
let phone = document.getElementById("phone").value
let chickno = document.getElementById("chickno").value
let foods = document.getElementById("choose-food").value
let reciept = document.getElementsByClassName("reciept")
let input = document.getElementsByTagName("input")

let message_1 = "Please fill out all the input"


const body = document.body
const header = document.querySelector("header")
let lastScroll = 0

window.addEventListener("scroll", function(e) {
    let nav = document.getElementById("nav")
    let previousScroll = 0,
    navClasses = nav.classList
    let currentScroll = window.scrollY
    var isDown = currentScroll>previousScroll
if(isDown && !navClasses.contains('scrolled')){
    navClasses.add('scrolled')
}
else if(!isDown){
   navClasses.remove('scrolled')
}
previousScroll = currentScroll
})

function validate(){
    // console.log("clicked")
let name = document.getElementById("name").value
let email = document.getElementById("email").value
let phone = document.getElementById("phone").value
let chickno = document.getElementById("chickno").value
let foods = document.getElementById("choose-food")
let foodValue = foods.options[foods.selectedIndex].value
let foodText = foods.options[foods.selectedIndex].text

    if(name == "" || email == "" || phone == "" || chickno == "" || foodValue == ""){
        setTimeout(function(){ alert(message_1)},50);
        return false
    }
    
   else if(phone.length !== 11){
       alert("enter valid phone no")
    return false;
   }
    else if (chickno.length > 1){
        alert("please you cant order more 9 chickens ")
    }
    else{
       alert(" your order was successful")
    }
}
let btno = document.getElementsByClassName("btno");
let banner = document.getElementById("banner");

btno[0].onclick = function(){
    banner.src = "food_pics/Screenshot_20220303-110916_2.png";
    animation()
    this.classList.add("active")
    // this.id.add
}

btno[1].onclick = function(){
    banner.src = "food_pics/Screenshot_20220303-105733_1.png";
    animation()
    this.classList.add("active")
}

btno[2].onclick = function(){
    banner.src = "food_pics/Screenshot_20220303-110220_1.png";
    animation()
    this.classList.add("active")
}

function animation(){
    banner.classList.add("zoom");
    setTimeout(function(){
        banner.classList.remove("zoom");
    },500);
    
    for(b of btno){
        b.classList.remove("active")
    }
}