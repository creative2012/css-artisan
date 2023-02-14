const pageContainer = document.querySelector('main');
const bigMac = document.querySelector('#hamburgerWrapper');
let timeoutID = null;
let hamburger = false;
let homeMessageID = null;
let lastQuote = '-CSS Artisan';
const messagesLength = quotes.length;

//function to change home page message
const homeMessage = () => {
    if (homeMessageID != null) {
        clearHomeMessage();
    }

    const dynamicAfter = document.createElement("style");
    dynamicAfter.innerHTML =
        ".message::after{" +
        "display: flex;" +
        "justify-content: end;" +
        "font-family: 'Poppins', sans-serif;" +
        "font-size: 15px;" +
        "font-style: italic;" +
        "content: '-CSS Artisan';" +
        "}"
    document.head.appendChild(dynamicAfter);

    let last = 0;
    let rand = 0;
    homeMessageID = setInterval( () => {
        while (true) {
            rand = Math.floor(Math.random() * messagesLength);
            if (rand != last) break;
        }
        last = rand;
        let message = quotes[rand];
        let container = document.querySelector('.message');
        container.setAttribute('style', 'opacity: 0 ');
        setTimeout( () => {
            dynamicAfter.innerHTML = dynamicAfter.innerHTML.replace(lastQuote, message.author);
            lastQuote = message.author;
            container.innerHTML = message.quote;
            container.setAttribute('style', 'opacity: 1');
        }, 1000);
    }, 5000);

}
const clearHomeMessage = () => {
    clearInterval(homeMessageID);
    homeMessageID = null;

}

//Function to copy to clipboard
const copyToClip = (text) => {

    // write to clipboard
    navigator.clipboard.writeText(text);

}

//function to alert copyed to clip
const boxAlert = (button) => {
    button.firstChild.textContent = "Copyed to clip!";
    timeoutID = setTimeout( () => {
        button.firstChild.textContent = "Copy CSS";
    }, 1000)

}
//function to alert copyed to clip CB
const boxAlertCB = (button) => {
    document.querySelector(button).innerHTML = "Copyed!";
    timeoutID = setTimeout( () => {
        document.querySelector(button).innerHTML = "Copy";
    }, 1000)

}
//function to control active nav itom
const navController = (button, change = true) => {
    if (change) button.style.color = 'black';

    let inactive = document.querySelector('.active');
    inactive.classList.remove('active');

    if (inactive.id != 'nav-title') inactive.style.color = 'lightslategrey';
    button.classList.add('active');

}
//close hamburger menu
const isHamburger = () => {
    hamburger = false;
    bigMac.removeAttribute('style', 'max-height');

}
//function to handle button clicks
const buttonHandler = (button) =>{

    if (button.id == 'nav-title') {
        navController(button, false);
        popHomepage();
        isMobile();
        homeMessage();
    }
    if (button.id == 'boxShadowLink') {
        navController(button);
        popPageBS(shadowBoxes);
        if (homeMessageID != null) {
            clearHomeMessage();
        }

    }
    if (button.id == 'checkBoxesLink') {
        navController(button);
        popPageCB(checkBoxes);
        if (homeMessageID != null) {
            clearHomeMessage();
        }

    }
    if (button.id == 'buttonsLink') {
        navController(button);
        popPageB(buttonsCSS);
        if (homeMessageID != null) {
            clearHomeMessage();
        }

    }
    if (button.id == 'scrollLink') {
        navController(button);
        popGeneric('Scroll bars')
        if (homeMessageID != null) {
            clearHomeMessage();
        }

    }
    if (button.id == 'backgroundLink') {
        navController(button);
        popGeneric('Backgrounds')
        if (homeMessageID != null) {
            clearHomeMessage();
        }

    }
    //copy shadow CSS to user clipboard
    if (button.classList.contains('shadow-box')) {
        copyToClip(button.getAttribute('style', 'box-shadow'));
        boxAlert(button);

    }
    if (button.parentElement.classList.contains('shadow-box')) {
        copyToClip(button.parentElement.getAttribute('style', 'box-shadow'));
        boxAlert(button);

    }
    //copy button CSS to user clipboard
    if (button.classList.contains('item')) {
        copyToClip(button.parentNode.parentNode.innerHTML);
        boxAlert(button);
    }
    if (button.parentElement.classList.contains('item')) {
        copyToClip(button.parentNode.parentNode.parentNode.innerHTML);
        boxAlert(button);

    }
    //copy checkbox CSS to user clipboard
    if (button.classList.contains('checkBox')) {
        copyToClip(button.parentNode.parentNode.innerHTML);
        let item = "#copyCB"+ button.dataset.id;
        console.log(item)
        boxAlertCB(item);

    }
    //mobile menu icon
    if (button.id == 'ham' && !hamburger) {
        hamburger = true;
        bigMac.setAttribute('style', 'max-height: 222px');
        return;

    }
    //is mobile menu open? if so close it
    if (hamburger) {
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
navContainer.addEventListener('click', (e) => {
    buttonHandler(e.target);

});

document.querySelector('main').onscroll = () => { scrollFunction() };

const scrollFunction = () => {
    if (document.querySelector('main').scrollTop > 10) {
        document.querySelector('footer').style.bottom = "-70px";

    } else {
        document.querySelector('footer').style.bottom = "0";

    }
}

