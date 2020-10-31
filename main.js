
let show = document.getElementById('show');
let formSection = document.getElementById('formSection');
let send = document.getElementById('send');

show.onclick = function(){
    formSection.style.display = 'block';  
    show.style.display = 'none';
}

send.onclick = function(){
    let name = document.getElementById('name').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let message = document.getElementById('message').value;
   
    let postInfo = new XMLHttpRequest();
    postInfo.open('GET', `https://api.telegram.org/bot1372963116:AAE-0FcR1zU0Yb-kZyPE57NAeMaZv87RXrg/sendMessage?text=
    Name:${name}%0A 
    Phone number: ${phoneNumber}%0A 
    Message: ${message}&chat_id=-366783300`, false);
    postInfo.send();
}     