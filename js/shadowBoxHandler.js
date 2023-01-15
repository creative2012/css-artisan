const shadowBoxes =[
    'box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;',
    'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
    'box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;',
    'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    'box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;',
    'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;',

]

function popShadowBoxes(){
    var header = document.querySelector('#section-header')
    var container = document.querySelector('#main-container');
    container.innerHTML = ''
    header.textContent = 'Box Shadows';
    shadowBoxes.forEach(function (style){
        var box = document.createElement('div');
        box.classList.add('shadow-box');
        box.setAttribute('style', style)
        container.appendChild(box);

    })

}