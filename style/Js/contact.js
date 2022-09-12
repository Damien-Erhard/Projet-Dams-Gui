let btn1 = document.getElementById("btn1");
btn1.addEventListener('click', btnEnvoyer);

function btnEnvoyer(){
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;
    let inp3 = document.getElementById("inp3").value;
    let inp4 = document.getElementById("inp4").value;

    alert(`Votre message Mr/Mme ${inp1.toUpperCase()} a bien été envoyer.`)
}