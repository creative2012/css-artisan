window.onresize = function() {
    document.body.height = window.innerHeight;
}
window.onresize(); // called to initially set the height.

const pageContainer = document.querySelector('main');
const bigMac = document.querySelector('#hamburgerWrapper');
var timeoutID = null;
var hamburger = false;
//is Iphone?
function isIphone() {
    if (navigator.userAgent.match(/iPhone/i)) {

    }
}

//Function to copy to clipboard
function copyToClip(button) {
        // Get the text field
    var copyText = button.getAttribute('style', 'box-shadow');
        // write to clipboard
        navigator.clipboard.writeText(copyText);
        // Alert the copied text
        boxAlert(button);

}
//function to alert copyed to clip
function boxAlert(button) {
    button.firstChild.textContent = "Copyed to clip!";
    timeoutID = setTimeout(function () {
        button.firstChild.textContent = "Copy CSS";
    }, 1000)

}
//function to control active nav itom
function navController(button, change = true) {
        if (change) button.style.color = 'black';
    var inactive = document.querySelector('.active');
        inactive.classList.remove('active');
        if (inactive.id != 'nav-title') inactive.style.color = 'lightslategrey';
        button.classList.add('active');

}
//close hamburger menu
function isHamburger(){
        hamburger = false;
        bigMac.removeAttribute('style','max-height');
    
}
//wiggle hello message
function wiggle(button){
    button.classList.add('wiggle');
    setTimeout(function(){
        button.classList.remove('wiggle');
    },2500)
}

//function to handle button clicks
function buttonHandler(button) {
    
    if (button.id == 'nav-title') {
        navController(button, false);
        popHomepage();        

    }
    if (button.id == 'boxShadowLink') {
        navController(button);
        popPageBS(shadowBoxes);

    }
    if (button.id == 'checkBoxesLink') {
        navController(button);
        popGeneric('Check Boxes')

    }
    if (button.id == 'buttonsLink') {
        navController(button);
        popPageB(buttonsCSS);

    }
    if (button.id == 'scrollLink') {
        navController(button);
        popGeneric('Scroll bars')

    }
    if (button.id == 'backgroundLink') {
        navController(button);
        popGeneric('Backgrounds')

    }
    //copy CSS to user clipboard
    if (button.classList.contains('shadow-box')) {
        copyToClip(button);

    }
    if (button.parentElement.classList.contains('shadow-box')) {
        copyToClip(button.parentElement);

    }
    //mobile menu icon
    if (button.id == 'ham' && !hamburger) {
        hamburger = true;
        bigMac.setAttribute('style','max-height: 222px');
        return;

    } 
    if (button.classList.contains('helloMsg') || button.parentElement.classList.contains('helloMsg')) {
        wiggle(button);

    }
    //is mobile menu open? if so close it
    if(hamburger){
        isHamburger();
    } 
   
}
// isIphone();
//show home page on load
popHomepage('home');
//page click listener
const navContainer = document.querySelector('body');
navContainer.addEventListener('click', function (e) {
    buttonHandler(e.target);

});
