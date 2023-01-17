const pageContainer = document.querySelector('main');
const bigMac = document.querySelector('#hamburgerWrapper');
const messages = [ 
    'Do things Differently!',
    'Reach for the stars',
    'Have no fear of perfection -- youll never reach it',
    'Design is intelligence made visible.',
    'Everything is designed. ...',
    'You cant use up creativity. ...',
    'Design adds value faster than it adds costs.',
    'The public is more familiar with bad design than good design.'

]
var timeoutID = null;
var hamburger = false;
var homeMessageID = null;
//is Iphone?
function isIphone() {
    if (navigator.userAgent.match(/iPhone/i)) {
        var footer = document.querySelector('footer');
        footer.setAttribute('style', 'bottom: 50px');
    }
}
//function to change home page message
function homeMessage(){
    var i = 0;
    var last = 0;
    var rand = 0;
    var messagesLength = messages.length;
    homeMessageID = setInterval(function (){
        while(true){
        rand = Math.floor(Math.random() * messagesLength);
        if (rand != last) break;
        }
        last = rand;
        var message = messages[rand];
        var container = document.querySelector('.message');
        container.setAttribute('style','opacity: 0 ');
        setTimeout(function (){
            container.innerHTML =  message;
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
    console.log('here')

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
        setTimeout(function (){
            homeMessage();
        },2000);
        if(homeMessageID != null) {
            clearHomeMessage();
        }        

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
setTimeout(function (){
homeMessage();
},2000);
// isIphone();
//page click listener
const navContainer = document.querySelector('body');
navContainer.addEventListener('click', function (e) {
    buttonHandler(e.target);

});
