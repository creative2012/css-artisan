const header = document.querySelector('#section-header');
const container = document.querySelector('#main-container');
//function to show homepage
function popHomepage() {

        container.innerHTML = '';
        header.innerHTML = '';
        header.setAttribute('class', 'hide');
        container.innerHTML = '<div class="homeMessages"><div class="message">Be Inspired..</div><br/><div class="basicMsg">Browse a selection of the webs best CSS, Click any item to copy its CSS directly</div></div>';
        // container.innerHTML =
        // '<div class="homeWrapper">'+
        //     '<div class="helloMsg">'+
        //         '<span style="color:#c7bb33;">#cssArtisan {</span><br>'+
        //         '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+
        //         '<span style="color:#80d0ff;">Welcome:</span>&nbsp "Hello"&nbsp ;<br/><span style="color:#c7bb33;">}</span>'+
        //     '</div>'+
        //     '<div class="mainDetail">'+
        //         '/* A Selection of the webs best CSS to inspire your next project.'+
        //         '<br/><br/> Click any of the examples to copy the CSS direct to your clipboard */'+
        //     '</div>'+
        // '</div>';
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

//Function to show buttons page
function popPageB(pageContent) {
        setPage('Buttons');
    var i = 1;
        pageContent.forEach(function (item, index) {
        var box = document.createElement('div');
        var text = document.createElement('span')
        var id = 'button'+index;
            box.classList.add('button');
            // box.setAttribute('style', item.style.button);
            box.setAttribute('id', id);
            box.setAttribute('data-id', index);
            text.textContent = "Copy CSS";

            box.appendChild(text);
            container.appendChild(box);
            addStyleTag('#'+id+' { '+item.style.button+' }'+'#'+id+':hover { '+item.style.focus+' }')
            var dynamicAfter = document.createElement("style");
            dynamicAfter.innerHTML =
            "#"+id+"::after{"+
                "position:absolute;"+
                "bottom: -20px;"+
                "display: flex;"+
                "justify-content: end;"+
                "color: black; !important"+
                "font-family: 'Poppins', sans-serif;"+
                "font-size: 12px;"+
                "font-style: italic;"+
                "content:'"+(index+1)+" - "+item.credit+"';"+
            "}"
            document.head.appendChild(dynamicAfter);
            i++;
    });

}
//just for testing
function popGeneric(headerText) {

        container.innerHTML = '';
        header.innerHTML = headerText;

}
function setPage(title){
        container.innerHTML = '';
        header.removeAttribute('class', 'home');
        container.removeAttribute('class', 'hide');
        header.textContent = title;
    
}
function addStyleTag(css){
    
        
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

            head.appendChild(style);

            style.type = 'text/css';
            if (style.styleSheet){
                // This is required for IE8 and below.
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
}