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
function popHomepage() {
    var header = document.querySelector('#section-header');
    var container = document.querySelector('#main-container');
        container.innerHTML = '';
        container.setAttribute('class', 'hide');
        header.innerHTML =
            '<div class="helloMsg">'+
                '<span style="color:#c7bb33;">#cssArtisan {</span><br>'+
                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+
                '<span style="color:#80d0ff;">Welcome:</span>&nbsp "Hello"&nbsp ;<br/><span style="color:#c7bb33;">}</span>'+
                '<div id="social">'+
                    '<a href="https://github.com/creative2012" target="_blank" rel="noopener noreferrer">'+
                        '<div id="git" ></div>'+
                    '</a>'+
                    '<a href="https://www.linkedin.com/in/paul-morris-1b938230/" target="_blank" rel="noopener noreferrer">'+
                        '<div id="linked" ></div>'+
                    '</a>'+
                    '<a href="mailto:creative2012@hotmail.com" >'+
                        '<div id="email" ></div>'+
                    '</a>'+
                '</div>'+
            '</div>'+
            '<div class="mainDetail">'+
                '/* A Selection of the webs best CSS to inspire your next project.'+
                '<br/><br/> Click any of the examples to copy the CSS direct to your clipboard */'+
            '</div>';
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
