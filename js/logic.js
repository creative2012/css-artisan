const pageContainer = document.querySelector('main');
var timeoutID = null;

function popShadowBoxes() {
    var header = document.querySelector('#section-header');
    var container = document.querySelector('#main-container');
    container.innerHTML = '';
    header.textContent = 'Box Shadows';
    var i = 1;
    shadowBoxes.forEach(function (style) {
        var box = document.createElement('div');
        box.classList.add('shadow-box');
        box.setAttribute('style', style)
        var text = document.createElement('span')
        text.textContent = "Copy CSS";
        var icon = document.createElement('div');
        icon.setAttribute('class', 'copyIcon');
        var number = document.createElement('div');
        number.setAttribute('class', 'shadowBoxNo');
        number.textContent = i
        box.appendChild(text);
        box.appendChild(number);
        box.appendChild(icon);
        // box.setAttribute('data-style', style)
        container.appendChild(box);
        i++;

    })

}
function popGeneric(headerText) {
    var header = document.querySelector('#section-header');
    var container = document.querySelector('#main-container');
    container.innerHTML = '';
    header.innerHTML = headerText;


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

    // write to clipboard
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert(button);
}
//function to alert copyed to clip
function alert(button) {
    button.firstChild.textContent = "Copyed to clip!";
    timeoutID = setTimeout(function () {
        button.firstChild.textContent = "Copy CSS";

    }, 1000)
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
        popGeneric('Home')

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
    if (button.id == 'fontsLink') {
        navController(button);
        popGeneric('Fonts')

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
//page click listener
const navContainer = document.querySelector('body');
navContainer.addEventListener('click', function (e) {
    buttonHandler(e.target);

});
