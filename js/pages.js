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
//Function to show box shadows page
function popPageBS(pageContent) {
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
//Function to show buttons page
function popPageB(pageContent) {
    navigator.clipboard.writeText(pageContent[0].css.join('\r\n'));

}
//just for testing
function popGeneric(headerText) {
    var header = document.querySelector('#section-header');
    var container = document.querySelector('#main-container');
        container.innerHTML = '';
        header.innerHTML = headerText;

}