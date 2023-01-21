const pageContainer = document.querySelector('main');
const bigMac = document.querySelector('#hamburgerWrapper');
var timeoutID = null;
var hamburger = false;
var homeMessageID = null;
var lastQuote = '-CSS Artisan';

//function to change home page message
function homeMessage(){
    if(homeMessageID != null) {
        clearHomeMessage();
    }     
    var dynamicAfter = document.createElement("style");
        dynamicAfter.innerHTML =
        ".message::after{"+
            "display: flex;"+
            "justify-content: end;"+
            "font-family: 'Poppins', sans-serif;"+
            "font-size: 15px;"+
            "font-style: italic;"+
            "content: '-CSS Artisan';"+
        "}"
        document.head.appendChild(dynamicAfter);
    
    var i = 0;
    var last = 0;
    var rand = 0;
    var messagesLength = quotes.length;
    homeMessageID = setInterval(function (){
        while(true){
        rand = Math.floor(Math.random() * messagesLength);
        if (rand != last) break;
        }
        last = rand;
        var message = quotes[rand];
        var container = document.querySelector('.message');
            container.setAttribute('style','opacity: 0 ');
            setTimeout(function (){
                dynamicAfter.innerHTML = dynamicAfter.innerHTML.replace(lastQuote, message.author);
                lastQuote = message.author;
                container.innerHTML =  message.quote;
                container.setAttribute('style','opacity: 1');
            },1000);
            if(i < messagesLength){
                i++;
            } else {
                i = 0;
            }           

    },5000);

}
function clearHomeMessage(){
    clearInterval(homeMessageID);
    homeMessageID = null;

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
        popHomepage();
        isMobile();
        homeMessage();
    }
    if (button.id == 'boxShadowLink') {
        navController(button);
        popPageBS(shadowBoxes);
        if(homeMessageID != null) {
            clearHomeMessage();
        }

    }
    if (button.id == 'checkBoxesLink') {
        navController(button);
        popGeneric('Check Boxes')
        if(homeMessageID != null) {
            clearHomeMessage();
        }

    }
    if (button.id == 'buttonsLink') {
        navController(button);
        popPageB(buttonsCSS);
        if(homeMessageID != null) {
            clearHomeMessage();
        }

    }
    if (button.id == 'scrollLink') {
        navController(button);
        popGeneric('Scroll bars')
        if(homeMessageID != null) {
            clearHomeMessage();
        }

    }
    if (button.id == 'backgroundLink') {
        navController(button);
        popGeneric('Backgrounds')
        if(homeMessageID != null) {
            clearHomeMessage();
        }

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
    //is mobile menu open? if so close it
    if(hamburger){
        isHamburger();
    } 
   
}
// isIphone();
//show home page on load
popHomepage('home');
isMobile();

homeMessage();

//page click listener
const navContainer = document.querySelector('body');
navContainer.addEventListener('click', function (e) {
    buttonHandler(e.target);

});

document.querySelector('main').onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.querySelector('main').scrollTop > 10 ) {
    document.querySelector('footer').style.bottom = "-70px";
    
  } else {
    document.querySelector('footer').style.bottom = "0";
    
  }
}