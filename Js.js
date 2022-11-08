const background = document.querySelector("#background")
const svgM = document.querySelector("#rect-m")
const foreground = document.querySelector("#foreground")
//const topground = document.querySelector("#topground")
const title = document.querySelector("#title")
//const nav = document.querySelector("nav")

window.addEventListener("scroll", event => {
    event.preventDefault();

    const scrollValue = window.scrollY;
//    background.style.top = scrollValue * 0.5 + 'px';
//    svgM.style.top = scrollValue * 0.5 + 'px';
//    topground.style.top = scrollValue * 0.5 + 'px';
    foreground.style.top = scrollValue * 0 + 'px';
    title.style.marginTop = scrollValue * 1.05 + 'px';
//    nav.style.top = scrollValue * 0.5 + 'px';
})

//document.getElementById("rectR").addEventListener("mouseover", mouseOver);
//document.getElementById("rectR").addEventListener("mouseout", mouseOut);
//const rectR = document.querySelector("#rectR")

//function mouseOver() {
//  document.getElementById("rectR").style.fill = "red";
//}
//
//function mouseOut() {
//  document.getElementById("rectR").style.fill = "black";
//}
//
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


window.addEventListener('scroll',() => {
    const about = document.querySelector(`#about`);
    const zkusenosti = document.querySelector(`#zkusenosti`);
    const projekty = document.querySelector(`#projekty`);
    const contact = document.querySelector(`#contact`);
    const aAbout = document.querySelector(`#a-about`)
    const aExp = document.querySelector(`#a-exp`)
    const aPro = document.querySelector(`#a-pro`)
    const aContact = document.querySelector(`#a-contact`)
    
    const contentAbout = document.querySelector(`.content-about`);
    const contentAboutOne = document.querySelector(`.content-about-1`);
    const contentExp = document.querySelector(`.content-exp`);
    const contentExpOne = document.querySelector(`.content-exp-1`);
    const contentExpTwo = document.querySelectorAll(`.content-exp-2`);
    const contentExpThree = document.querySelector(`.content-exp-3`);
    const contentExpFour = document.querySelector(`.content-exp-4`);
    const contentExpFive = document.querySelector(`.content-exp-5`);
    const contentExpSix = document.querySelector(`.content-exp-6`);
    const contentPro = document.querySelector(`.content-pro`);
    const contentProOne = document.querySelector(`.content-pro-1`);
    const contentProTwo = document.querySelector(`.content-pro-2`);
    const contentProThree = document.querySelector(`.content-pro-3`);
    const contentContact = document.querySelector(`.content-contact`);
    const contentContactOne = document.querySelector(`.content-contact-1`);

    let aboutPos = about.getBoundingClientRect().top;
    let zkusenostiPos = zkusenosti.getBoundingClientRect().top;
    let projektyPos = projekty.getBoundingClientRect().top;
    let contactPos = contact.getBoundingClientRect().top;

    let screenPos = window.innerHeight;

    if((aboutPos + 200) < screenPos) {
        contentAbout.classList.add(`activateH`);
        contentAboutOne.classList.add(`activateT`);
        aAbout.classList.add(`activec`);
    } else {
        contentAbout.classList.remove(`activateH`);
        contentAboutOne.classList.remove(`activateT`);
        aAbout.classList.remove(`activec`);
    }
    if((zkusenostiPos + 200) < screenPos){
        aAbout.classList.remove(`activec`);
        contentExp.classList.add(`activateH`);
        contentExpOne.classList.add(`activateT`);
        contentExpTwo.forEach(expTwo => expTwo.classList.add(`activateT`));
        aExp.classList.add(`activec`);
    } else {
        contentExp.classList.remove(`activateH`);
        contentExpOne.classList.remove(`activateT`);
        contentExpTwo.forEach(expTwo => expTwo.classList.remove(`activateT`));
        contentExpThree.classList.remove(`activateT`);
        contentExpFour.classList.remove(`activateL`);
        contentExpFive.classList.remove(`activateP`);
        contentExpSix.classList.remove(`activateH`);
        aExp.classList.remove(`activec`);
    }
    if((zkusenostiPos + 800) < screenPos){
        contentExpThree.classList.add(`activateT`);
        contentExpFour.classList.add(`activateL`);
        contentExpFive.classList.add(`activateP`);
        contentExpSix.classList.add(`activateH`);
    }
    if((projektyPos + 200) < screenPos){
        aExp.classList.remove(`activec`);
        contentPro.classList.add(`activateH`);
        contentProOne.classList.add(`activateL`);
        contentProTwo.classList.add(`activateH`);
        contentProThree.classList.add(`activateP`);
        aPro.classList.add(`activec`);
    } else {
        contentPro.classList.remove(`activateH`);
        contentProOne.classList.remove(`activateL`);
        contentProTwo.classList.remove(`activateH`);
        contentProThree.classList.remove(`activateP`);
        aPro.classList.remove(`activec`);
    }
    if((contactPos + 200) < screenPos){
        aPro.classList.remove(`activec`);
        contentContact.classList.add(`activateH`);
        contentContactOne.classList.add(`activateR`);
        aContact.classList.add(`activec`);
    } else {
        contentContact.classList.remove(`activateH`);
        contentContactOne.classList.remove(`activateR`);
        aContact.classList.remove(`activec`);
    }
})