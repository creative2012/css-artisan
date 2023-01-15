const pageContainer = document.querySelector('main');

function fetchPage(page){
 
  fetch(page)
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();
        // Parse the text
        var doc = parser.parseFromString(html, "text/html");
        //get the body
        var header =  doc.querySelector('body');
        //get inner html from body and add to page container
        pageContainer.innerHTML = header.innerHTML;

    })
    //log any errors
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });

}

const boxShadowBtn = document.querySelector('#boxShadowLink');

boxShadowBtn.addEventListener('click',function (){
    fetchPage('pages/shadow-boxes.html');
});