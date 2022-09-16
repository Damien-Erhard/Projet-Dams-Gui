var slide = new Array("../style/img/head2.jpg" , "../style/img/head3.jpg" , "../style/img/head1.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 4000);

// MEDIA QUERY
let menu = document.getElementById("logo");
let menu_deux = document.getElementById('menu_2');
let open_menu = document.getElementById("nav2");
let body = document.body;

menu.addEventListener('click', function() {
    if(menu_deux.style.display = 'none'){
        menu_deux.style.display = 'block';
        open_menu.style.display = 'block';
    } else {
        return false;
    }
});

menu_deux.addEventListener('click', function() {
    open_menu.style.display = 'none'
    if(menu_deux.style.display = 'block'){
        menu_deux.style.display = 'none';
    } else {
        return false;
    }
});


let closeNav = document.getElementById('close');
closeNav.addEventListener('click',function() {
    if (menu_deux.style.display = 'block') {
        menu_deux.style.display = 'none';
        open_menu.style.display = 'none';

    } else {
        return false;
    }
});

function test(x) {
    if (x.matches){  // true ou false
        btn_1.style.display = "none";
        btn_2.style.display = "none";
        btn_3.style.display = "none";
    } else {
        btn_1.style.display = "block";
        btn_2.style.display = "block";
        btn_3.style.display = "block";
    }

} 

let x = window.matchMedia("(max-width: 900px)") // retourne un objet en chaine de caractere en objet
x.addListener(test) // permet d'appeler la fonctionnalité, d'executer la fonction, on l'utilise que 
                    // pour les media query