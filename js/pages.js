const header = document.querySelector('#section-header');
const container = document.querySelector('#main-container');
//function to show homepage
function popHomepage() {

    container.innerHTML = '';
    header.innerHTML = '';
    header.setAttribute('class', 'hide');
    container.innerHTML = '<div class="homeMessages"><div class="message">Be Inspired..</div><br/><div class="basicMsg">Browse a selection of the webs best CSS, Click any item to copy its CSS directly</div></div>';
    container.setAttribute('class', 'home');

}
//Function to show box shadows page
function popPageBS(pageContent) {
    setPage('Box Shadows');
    var i = 1;
    pageContent.forEach(function (style) {
        var box = document.createElement('div');
        var text = document.createElement('span')
        var number = document.createElement('div');

        box.classList.add('shadow-box');
        box.setAttribute('style', style);
        text.textContent = "Copy CSS";
        number.setAttribute('class', 'shadowBoxNo');
        number.textContent = i

        box.appendChild(text);
        box.appendChild(number);
        container.appendChild(box);
        i++;
    });


}
//function to show buttons page
function popPageB(pageContent) {
    setPage('Buttons');
    var i = 1;
    pageContent.forEach(function (item, index) {
        let innerHTML = `<button class="item" id="button-${index + 1}" role="button"><span>Copy CSS</span></button>`;
        var box = document.createElement('div');
        box.innerHTML = `
        <div class="buttonWrapper">
            ${innerHTML}
            <span class="credit">
                <span>${index + 1} </span>by ${item.credit}
            </span>
        </div>
        <style>
          ${item.style.replace(/{ID}/g, `#button-${index + 1}`)}
        </style>
       `
        container.appendChild(box);
    });

}
//function to show check boxes page
function popPageCB(pageContent) {
    setPage('CheckBoxes');
    var i = 1;
    pageContent.forEach(function (item, index) {
        
        
        let innerHTML = `<input type="checkbox"  name="checkbox" checked/>`;
        var box = document.createElement('div');
        box.innerHTML = `
        <div id="checkBox-${index + 1}" class="checkBoxWrapper">

            ${innerHTML}
            <div class="copyCB checkBox" data-id="${index + 1}" id="copyCB${index + 1}">Copy</div>
            <span class="credit">
                <span>${index + 1} </span>by ${item.credit}
            </span>
            
        </div>
        <style>
          ${item.style.replace(/{ID}/g, `#checkBox-${index + 1}`)}
        </style>
       `
        container.appendChild(box);
    });

}
//just for testing
function popGeneric(headerText) {
    container.innerHTML = '';
    header.innerHTML = headerText;

}
function setPage(title) {
    pageContainer.scrollTo(0, 0);
    container.innerHTML = '';
    header.removeAttribute('class', 'home');
    container.removeAttribute('class', 'hide');
    header.textContent = title;

}
function addStyleTag(css) {
    head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}