const quotes = [ 
    {
        quote:'Do things Differently!',
        author:'-Steve Jobs'
    },
    {
        quote:'Reach for the stars',
        author:'-CSS Artisan'
    },
    {
        quote:'Have no fear of perfection -- youll never reach it',
        author:'-Salvador Dali'
    },
    {
        quote:'Design is intelligence made visible.',
        author:'-Le Corbusier'
    },
    {
        quote:'Design is intelligence made visible.',
        author:'-Brian Reed'
    },
    {
        quote:'You cant use up creativity. ...',
        author:'-Maya Angelou'
    },
    {
        quote: 'Design adds value faster than it adds costs.',
        author:'-Joel Spolsky'
    },
    {
        quote: 'The public is more familiar with bad design than good design.',
        author:'-Paul Rand'
    },
    

]

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


// dynamicAfter.innerHTML = dynamicAfter.innerHTML.replace(/height: [0-9]+px/, "height: 12px");