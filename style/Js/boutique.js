let img = ["../style/img/parisbrest.jpg" , "../style/img/head1.jpg" , "../style/img/head2.jpg" , "../style/img/head3.jpg" , "../style/img/baguette.jpg" , "../style/img/croissants.jpg"];
let titre = ["Paris-Brest", "Etalage", "Patisserie", "Pain", "Baguette" , "CroissantPurBeurre",];
let tarif = ["4€50", "7000€", "2500€", "500€,", "1€10" , "0€90"];
// var numero = 0;
let time = 1500;
let ff = 0;

// function changeImg(){
//         image.src = img[ff];
//     for( ff = 0; ff < img.length -1; ff++) {
//         setTimeout("changeImg()", time); 
//     }
    
// }
// window.onload = changeImg;

function Changeimage(sens) {
    ff = ff + sens;
    if (ff < 0)
        ff = img.length - 1;
    if (ff > img.length - 1)
        ff = 0;
    document.getElementById("image").src = img[ff];
}

setInterval("Changeimage(1)", 2000);

let gg = 0;

function ChangeTitre(sens) {
    gg = gg + sens;
    if (gg < 0)
        gg = titre.length - 1;
    if (gg > titre.length - 1)
        gg = 0;
    document.getElementById("produit").innerHTML = titre[gg];
}

setInterval("ChangeTitre(1)", 2000);

let jj = 0;

function ChangePrice(sens) {
    jj = jj + sens;
    if (jj < 0)
        jj = tarif.length - 1;
    if (jj > tarif.length - 1)
        jj = 0;
    document.getElementById("price").innerHTML = tarif[jj];
}

setInterval("ChangePrice(1)", 2000);

// function ChangeProduit(sens) {
//     numero = numero + sens;
//     if (numero < 0)
//         numero = titre.length -1;
//     if (numero > titre.length - 1)
//         numero = 0;
//     document.getElementById("produit").innerHTML = titre[numero];
// }

// setInterval("ChangeProduit(1)", 4000);

// function Changeprice(sens) {
//     numero = numero + sens;
//     if (numero < 0)
//         numero = tarif.length -1;
//     if (numero > tarif.length - 1)
//         numero = 0;
//     document.getElementById("price").innerHTML = tarif[numero];
// }

// setInterval("Changeprice(1)", 4000);


// let i = 0;
// let images = ['img1.jpg'];
// let time = 4000;

// function changeimg(){
//    document.slide.src = images[i];
//    if( i < images.length -1 ){
//     i++;
//    } else {
//     i = 0;
//    }
//    setTimeout("changeimg()", time);
// }

// window.onload = changeimg;