const Styleswitchtoggle=document.querySelector('.style-switcher-toggler')


Styleswitchtoggle.addEventListener("click",()=>{
    document.querySelector('.style-switcher').classList.toggle('open')
})


window.addEventListener("scroll",()=>{
    if( document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open')

    }
})
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const alternetstyle=document.querySelectorAll(".alternate-style")

function setAciveStyle(color){
    alternetstyle.forEach((style) => {
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled","true")
        }
    });
}


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const daynight=document.querySelector(".day-neight")
daynight.addEventListener("click",()=>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon")
document.body.classList.toggle("dark")
})
window.addEventListener("load",()=>{
    if(!document.body.classList.contains('dark')){
        daynight.querySelector("i").classList.add("fa-moon")
        document.body.classList.add("dark")
    }
    else{
        daynight.querySelector("i").classList.add("fa-sun")
    }
})

