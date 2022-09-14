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
let menu = document.getElementById("logoBurg");
let menu_deux = document.getElementById('menu2');
let open_menu = document.getElementById("nav2");

// menu.addEventListener('click', function() {
//     if (menu.style.display = 'block') {
//         open_menu.style.display = 'block';
//         // menu_deux.style.display = 'block';
//         // console.log('test');
//     } else {
//         return false;
//     }
// });


// menu.addEventListener('click', function() {
//     if (open_menu.style.display = 'none') {
//         open_menu.style.display = 'block';
//     } else {
//         return open_menu.style.display = "none";
//     }
// });


let closeNav = document.getElementById('close');
closeNav.addEventListener('click',function() {
    if (open_menu.style.display = 'block') {
        open_menu.style.display = 'none';
        // console.log('test')

    } else {
        return open_menu.style.display = "block";
    }
});

function test(x) {
    if (x.matches){  // true ou false
        menu.style.display = "block";
        menu_deux.style.display = "block" ;
        open_menu.style.display = "block" ;
        btn_1.style.display = "none";
        btn_2.style.display = "none";
        btn_3.style.display = "none";
        // ul.style.display = "flex";
        // ul.style.gap = "20px" ;
        // nav2.style.display = "flex" ;
        // nav2.style.alignItems = "center";
        // nav2.style.justifyContent = "center" ;

    } else {
        menu.style.display = "block";
        menu_deux.style.display = "none";
        open_menu.style.display = "none" ;
        btn_1.style.display = "block";
        btn_2.style.display = "block";
        btn_3.style.display = "block";
    }

} 

let x = window.matchMedia("(max-width: 900px)") // retourne un objet en chaine de caractere en objet
// test(x)
x.addListener(test) // permet d'appeler la fonctionnalité, d'executer la fonction, on l'utilise que 
                    // pour les media query