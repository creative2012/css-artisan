const pageContainer = document.querySelector('main');
const bigMac = document.querySelector('#hamburgerWrapper');
var timeoutID = null;
var hamburger = false;
//is Iphone?
function isIphone() {
    if (navigator.userAgent.match(/iPhone/i)) {

    }
}

//function to show homepage
function popHomepage(headerText) {
    var header = document.querySelector('#section-header');
    var container = document.querySelector('#main-container');
    container.innerHTML = '';
    // container.style.setProperty('height', '30px');
    // container.innerHTML = '<div class="homeDes">A collection of CSS styles you can easily copy and be inspired from, for your own projects</div>';
    container.setAttribute('class', 'hide');
    header.innerHTML =
        '<div class="helloMsg">#cssArtisan {<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span style="color:#efff00;">Welcome:</span>&nbsp "Hello"&nbsp ;<br/>}</div>';
    header.setAttribute('class', 'home');


}
//Function to show other pages
function popPage(pageContent) {
    var header = document.querySelector('#section-header');
    var container = document.querySelector('#main-container');
    container.innerHTML = '';
    header.removeAttribute('class', 'home');
    container.removeAttribute('class', 'hide');
    header.textContent = 'Box Shadows';
    var i = 1;
    pageContent.forEach(function (style) {
        var box = document.createElement('div');
        var text = document.createElement('span')
        var icon = document.createElement('div');
        var number = document.createElement('div');

        box.classList.add('shadow-box');
        box.setAttribute('style', style)
        text.textContent = "Copy CSS";
        icon.setAttribute('class', 'copyIcon');
        number.setAttribute('class', 'shadowBoxNo');
        number.textContent = i

        box.appendChild(text);
        box.appendChild(number);
        box.appendChild(icon);
        container.appendChild(box);
        i++;

    });

}
//just for testing
function popGeneric(headerText) {
    var header = document.querySelector('#section-header');
    var container = document.querySelector('#main-container');
    container.innerHTML = '';
    header.innerHTML = headerText;


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

//function to handle button clicks
function buttonHandler(button) {
    
    if (button.id == 'nav-title') {
     
        navController(button, false);
        popHomepage('home');

    }
    if (button.id == 'boxShadowLink') {
     
        navController(button);
        popPage(shadowBoxes);

    }
    if (button.id == 'checkBoxesLink') {
     
        navController(button);
        popGeneric('Check Boxes')

    }
    if (button.id == 'buttonsLink') {
       
        navController(button);
        popGeneric('Buttons')

    }
    if (button.id == 'scrollLink') {
        
        navController(button);
        popGeneric('Scroll bars')

    }
    if (button.id == 'backgroundLink') {
        
        navController(button);
        popGeneric('Backgrounds')

    }
    if (button.classList.contains('shadow-box')) {
        copyToClip(button);
    }
    if (button.parentElement.classList.contains('shadow-box')) {
        copyToClip(button.parentElement);
    }
    if (button.id == 'ham' && !hamburger) {
        hamburger = true;
        bigMac.setAttribute('style','max-height: 222px');
        return;
    } 
    if(hamburger){
       
        isHamburger();
    } 
}
// isIphone();
popHomepage('home');
//page click listener
const navContainer = document.querySelector('body');
navContainer.addEventListener('click', function (e) {
    buttonHandler(e.target);

});
