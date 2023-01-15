const pageContainer = document.querySelector('main');
var timeoutID = null;
const shadowBoxes = [
    'box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;',
    'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
    'box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;',
    'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    'box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;',
    'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;',
    'box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
    'box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;',
    'box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
    'box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;',
    'box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
    'box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
    'box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
    'box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;',
    'box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
    'box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
    'box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
    'box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
    'box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
    'box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;',
    'box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;',
    'box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;',
    'box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
    'box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
    'box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;',
    'box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;',
    'box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
    'box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;',
    'box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
    'box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
    'box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;',
    'box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
    'box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
    'box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;',
    'box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;',
    'box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;',
    'box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
    'box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
    'box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;',
    'box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
    'box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;',
    'box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;',
    'box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;',
    'box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;',
    'box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
    'box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;',
    'box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;',
    'box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;',
    'box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;',
    'box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;',
    'box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;',
    'box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;',
    'box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;',
    'box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;',
    'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;',
    'box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;',
    'box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;',
    'box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;',
    'box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;',
    'box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;',
    'box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;',
    'box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;',
    'box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;',
    'box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;',
    'box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;',
    'box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;',
    'box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;',
    'box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;',
    'box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;',
    'box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;',
    'box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;',
    'box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;',
    'box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;',
    'box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;',
    'box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;',
    'box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;',
    'box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;',
    'box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;',
    'box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;',
    'box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;',
    'box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;',
    'box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;',
    'box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
    'box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;',
    'box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
    'box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;',
    'box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;',
    'box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;',
    'box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;'
];

function popShadowBoxes() {
    var header = document.querySelector('#section-header');
    var container = document.querySelector('#main-container');
    container.innerHTML = '';
    header.textContent = 'Box Shadows';
    shadowBoxes.forEach(function (style) {
        var box = document.createElement('div');
        box.classList.add('shadow-box');
        box.setAttribute('style', style)
        var text = document.createElement('span')
        text.textContent = "Copy CSS";
        var icon = document.createElement('div');
        icon.setAttribute('class', 'copyIcon');
        box.appendChild(text);
        box.appendChild(icon);
        // box.setAttribute('data-style', style)
        container.appendChild(box);

    })

}
function popGeneric() {
    var header = document.querySelector('#section-header');
    var container = document.querySelector('#main-container');
    container.innerHTML = '';
    header.innerHTML = '';


}

// function fetchPage(page){

//   fetch(page)
//     .then(function(response) {
//         // When the page is loaded convert it to text
//         return response.text()
//     })
//     .then(function(html) {
//         // Initialize the DOM parser
//         var parser = new DOMParser();
//         // Parse the text
//         var doc = parser.parseFromString(html, "text/html");
//         //get the body
//         var header =  doc.querySelector('body');
//         //get inner html from body and add to page container
//         pageContainer.innerHTML = header.innerHTML;
//         popShadowBoxes();

//     })
//     //log any errors
//     .catch(function(err) {  
//         console.log('Failed to fetch page: ', err);  
//     });

// }
function copyToClip(button) {
    // Get the text field
    var copyText = button.getAttribute('style', 'box-shadow');

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert(button);
}
//function to alert copyed to clip
function alert(button) {
    button.firstChild.textContent = "Copyed to clip!";
    timeoutID = setTimeout(function () {
        button.firstChild.textContent = "Copy CSS";

    }, 500)
}

//function to control active nav itom
function navController(button) {
    var inactive = document.querySelector('.active');
    inactive.classList.remove('active');
    button.classList.add('active');

}

//function to handle button clicks
function buttonHandler(button) {
    if (button.id == 'nav-title') {
        navController(button);
        popGeneric()

    }
    if (button.id == 'boxShadowLink') {
        navController(button);
        popShadowBoxes();

    }
    if (button.id == 'checkBoxesLink') {
        navController(button);
        popGeneric()

    }
    if (button.id == 'buttonsLink') {
        navController(button);
        popGeneric()

    }
    if (button.id == 'fontsLink') {
        navController(button);
        popGeneric()

    }
    if (button.classList.contains('shadow-box')) {
        copyToClip(button);
    }
    if (button.parentElement.classList.contains('shadow-box')) {
        copyToClip(button.parentElement);
    }
}
//page click listener
const navContainer = document.querySelector('body');
navContainer.addEventListener('click', function (e) {
    buttonHandler(e.target);

});
