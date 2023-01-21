
//is mobile?
function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var msgBox = document.querySelector('.homeMessages');
        var basicMsg = document.querySelector('.basicMsg');
        basicMsg.classList.add('basicMsgPH');
        msgBox.setAttribute('style', 'top: -100px');
        document.querySelector('main').setAttribute('style', 'height: calc(100vh - 130px);');
    }
}
