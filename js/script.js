const text = ['Web Developer','Web Designer', 'Blogger'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';


(function type(){
     
    if (count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.anim-skill').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
       
    }
    setTimeout(type, 200);
    typeSpeed: 100;
    backSpeed: 60;
    loop: true;
    

})();