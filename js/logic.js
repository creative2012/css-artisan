const pageContainer = document.querySelector('main');
var timeoutID = null;

//function to show homepage
function popHomepage(headerText) {
    var header = document.querySelector('#section-header');
    var container = document.querySelector('#main-container');
    container.style.setProperty('height', '0px');
    container.innerHTML = '<em>Helping you to do more...</em>';
    header.innerHTML = '#cssArtisan {<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspWelcome: "Hello";<br/>}';
    header.setAttribute('class', 'home');
    

}
function popShadowBoxes() {
    var header = document.querySelector('#section-header');
    var container = document.querySelector('#main-container');
    container.innerHTML = '';
    header.removeAttribute('class','home');
    container.style.removeProperty('height');
    header.textContent = 'Box Shadows';
    var i = 1;
    shadowBoxes.forEach(function (style) {
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
    if(change) button.style.color = 'black' ;
    var inactive = document.querySelector('.active');
    inactive.classList.remove('active');
    if(inactive.id != 'nav-title') inactive.style.color = 'lightslategrey';
    button.classList.add('active');

}

//function to handle button clicks
function buttonHandler(button) {
    if (button.id == 'nav-title') {
        navController(button, false);
        popHomepage('home');

    }
    if (button.id == 'boxShadowLink') {
        navController(button);
        popShadowBoxes();

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
    if (button.classList.contains('shadow-box')) {
        copyToClip(button);
    }
    if (button.parentElement.classList.contains('shadow-box')) {
        copyToClip(button.parentElement);
    }
}
popHomepage('home');
//page click listener
const navContainer = document.querySelector('body');
navContainer.addEventListener('click', function (e) {
    buttonHandler(e.target);

});
