
//like session
let onLike = document.getElementById("like1");
let likeState = false;

for(let i = 1;i <= 5;i++){
    document.getElementById("like"+i).addEventListener("click",() => {
        if(likeState == false){
            document.getElementById("like"+i).style.opacity = 1;
            likeState = true;
        }
        else if(likeState == true){
            document.getElementById("like"+i).style.opacity = 0;
            likeState = false;
        }    
    })
}

// show up th boxes

window.onscroll = () => { showUp() }

const sh0 = document.getElementsByClassName("sh0");
const nav = document.getElementById("navBar");
const sh1 = document.getElementsByClassName("sh1");
const sh2 = document.getElementsByClassName("sh2");
const gifts = document.getElementsByClassName("gift");
const wishes = document.getElementById("wish");
const top1 = document.getElementById("top1");

function showUp(){

    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        nav.style.position = "fixed";
        top1.style.right = 20 + "px";
    }
    else{
        nav.style.position = "absolute";
        top1.style.right =  -70 + "px";
    }

    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        for(let i = 0;i < sh1.length;i++){
            sh1[i].classList.add("showUp");
        }
    }
    if(document.body.scrollTop > 960 || document.documentElement.scrollTop > 960){
        for(let i = 0;i < sh2.length;i++){
            sh2[i].classList.add("showUp");
        }
    }
    if(document.body.scrollTop > 1360 || document.documentElement.scrollTop > 1360){
        for(let i = 0;i < gifts.length;i++){
            let t = i / 2;
            setTimeout(function(){
                gifts[i].classList.add("showUp");
            },500 * t) 
        }
    }
    if(document.body.scrollTop >3060 || document.documentElement.scrollTop > 3060){
        wishes.classList.add("showLeft");
    }       
}

//page color changer

const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const header = document.getElementById("topest");
const section = document.getElementById("section");
const container = document.getElementById("con");
const iconName = document.getElementById("iconName");
const mn = document.getElementsByClassName("mn");
const headerTxt = document.getElementById("headerText");
const headerPara = document.getElementById("headerPara");
const headerBtn = document.getElementById("headerButton");
const givingHeader = document.getElementById("givingHeader");
const givingH3 = document.getElementsByClassName("givingH3");
const givingPara = document.getElementsByClassName("givingPara")
const celHeader = document.getElementById("celHeader");
const celPara = document.getElementById("celPara");
const giftHeader = document.getElementById("giftHeader");
const giftH3 = document.querySelectorAll(".giftH3");
const giftPara = document.querySelectorAll(".giftPara");
const newHeader = document.getElementById("newHeader");
const footerIconHeader = document.getElementById("footerIconHeader");
const footerIconPara = document.getElementById("footerIconPara");
const footerLi = document.querySelectorAll(".footerLi");
const footerLiHeader = document.querySelectorAll(".footerLiheader");
const av = document.querySelector(".av");
const imageSlide = document.getElementsByClassName("image");
const slide = document.getElementsByClassName("slide");
const slideH3 = document.getElementsByClassName("slideH3");
const slideP = document.getElementsByClassName("slideP");
const mBtn = document.querySelectorAll(".manual-btn");
const radio1 = document.getElementById("#radio1");
const radio2 = document.getElementById("#radio2");
const radio3 = document.getElementById("#radio3");
const radio4 = document.getElementById("#radio4");

moon.addEventListener("click",() => {
    sun.style.display = "block";
    moon.style.display = "none";
    header.style.backgroundColor = "rgb(179, 0, 0)";
    nav.style.backgroundColor = "rgb(179, 0, 0)";
    section.style.backgroundColor = "rgb(179, 0, 0)";
    container.style.backgroundColor = "rgb(179, 0, 0)";
    iconName.style.color = "#fff";
    for(let i = 0;i < mn.length;i++){
        mn[i].style.color = "#fff";
        mn[i].addEventListener("mouseover",function(){
            mn[i].style.color = "#000";
        });
        mn[i].addEventListener("mouseout",function(){
            mn[i].style.color = "#fff";
        });
    }
    headerTxt.style.color = "#fff";
    headerPara.style.color = "#C8C8C8";
    givingHeader.style.color = "#fff";
    for(let i = 0;i < givingH3.length;i++){
        givingH3[i].style.color = "#fff";
        givingPara[i].style.color = "#C8C8C8";
    }
    celHeader.style.color = "#fff";
    celPara.style.color = "#C8C8C8";
    giftHeader.style.color = "#fff";
    for(let i = 0;i < giftH3.length;i++){
        giftH3[i].style.color = "#fff";
        giftPara[i].style.color = "#C8C8C8";
    }
    newHeader.style.color = "#fff";
    footerIconHeader.style.color = "#fff";
    footerIconPara.style.color = "#C8C8C8";
    for(let i = 0;i < footerLiHeader.length;i++){
        footerLiHeader[i].style.color = "#fff";
    }
    for(let i = 0;i < footerLi.length;i++){
        footerLi[i].style.color = "#C8C8C8";
        footerLi[i].addEventListener("mouseover",function(){
            footerLi[i].style.color = "#000";
        })
        footerLi[i].addEventListener("mouseout",function(){
            footerLi[i].style.color = "#C8C8C8";
        })
    }
    av.style.color = "#fff";
    for(let i = 0;i < slide.length;i++){
        slide[i].style.backgroundColor="rgb(255, 255, 255)";
        slideH3[i].style.color = "black";
        slideP[i].style.color = "black";
        //imageSlide[i].style.backgroundColor = rgb(179, 0, 0);
    }
    for(let i = 0;i < mBtn.length;i++){
        mBtn[i].style.border = "2px solid rgb(255, 255, 255)";
        mBtn[i].style.backgroundColor = "rgb(170, 0, 0)";
        mBtn[i].addEventListener("mouseover",() => {
            mBtn[i].style.backgroundColor = "white";
        })
        mBtn[i].addEventListener("mouseout",() => {
            mBtn[i].style.backgroundColor = "rgb(170, 0, 0)";
        })
    }
})
sun.addEventListener("click",() => {
    moon.style.display = "block";
    sun.style.display = "none";
    header.style.backgroundColor = "transparent";
    nav.style.backgroundColor = "#fff";
    section.style.backgroundColor = "transparent";
    container.style.backgroundColor = "transparent";
    iconName.style.color = "#000";
    for(let i = 0;i < mn.length;i++){
        mn[i].style.color = "#000";
        mn[i].addEventListener("mouseover",function(){
            mn[i].style.color = "#E73939";
        });
        mn[i].addEventListener("mouseout",function(){
            mn[i].style.color = "#000";
        });
    }
    headerTxt.style.color = "#000";
    headerPara.style.color = "rgb("+129+", "+129+", "+129+")";
    givingHeader.style.color = "#000";
    for(let i = 0;i < givingH3.length;i++){
        givingH3[i].style.color = "#000";
        givingPara[i].style.color = "rgb("+129+", "+129+", "+129+")";
    }
    celHeader.style.color = "#000";
    celPara.style.color = "rgb("+129+", "+129+", "+129+")";
    giftHeader.style.color = "#000";
    for(let i = 0;i < giftH3.length;i++){
        giftH3[i].style.color = "#000";
        giftPara[i].style.color = "rgb("+129+", "+129+", "+129+")";
    }
    newHeader.style.color = "#000";
    footerIconHeader.style.color = "#000";
    footerIconPara.style.color = "rgb("+129+", "+129+", "+129+")";
    for(let i = 0;i < footerLiHeader.length;i++){
        footerLiHeader[i].style.color = "#000"
    }
    for(let i = 0;i < footerLi.length;i++){
        footerLi[i].style.color = "rgb("+129+", "+129+", "+129+")";
        footerLi[i].addEventListener("mouseover",function(){
            footerLi[i].style.color = "#E73939";
        })
        footerLi[i].addEventListener("mouseout",function(){
            footerLi[i].style.color = "rgb("+129+", "+129+", "+129+")";
        })
    }
    for(let i = 0;i < slide.length;i++){
        slide[i].style.backgroundColor="rgb(179, 0, 0)";
        slideH3[i].style.color = "white";
        slideP[i].style.color = "white";
        //imageSlide[i].style.backgroundColor = rgb(179, 0, 0);
    }
    for(let i = 0;i < mBtn.length;i++){
        mBtn[i].style.border = "2px solid rgb(170, 0, 0)"
        mBtn[i].style.backgroundColor = "white";
        mBtn[i].addEventListener("mouseover",() => {
            mBtn[i].style.backgroundColor = "rgb(170, 0, 0)";
        })
        mBtn[i].addEventListener("mouseout",() => {
            mBtn[i].style.backgroundColor = "white";
        })
    }
    av.style.color = "#000";

})

// slider of new box

let counter = 1;
 
setInterval(() => {

    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }

},5000)

//menu for mobile mode

let blackMenu = document.getElementById("menuBlack");
let whiteMenu = document.querySelector("#menuWhite");
let menuState = false;
let menuBox = document.querySelector("#menuBox");

blackMenu.addEventListener("click",() => {
    if(menuState == false){
        blackMenu.style.transform = "rotate("+90+"deg)"
        menuState = true;
        menuBox.style.left = 60 + "%";
    }
    else if(menuState == true){
        blackMenu.style.transform = "rotate("+0+"deg)";
        menuBox.style.left = 100 + "%";
        menuState = false;
    }

})
