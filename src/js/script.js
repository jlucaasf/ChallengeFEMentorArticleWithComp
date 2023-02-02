
const botaoShare = document.querySelector(".bordaShare");
const fbIcon = document.getElementById("facebookIcon");
const ttIcon = document.getElementById("twitterIcon");
const ptrIcon = document.getElementById("pinterestIcon");
let verificador = false;




function mostrarBalao() {
    if (verificador == false) {
        document.getElementById("balaoId").classList.remove("balaoOff");
        document.getElementById("balaoId").classList.add("balaoOn");
        document.getElementById("bordaShareId").classList.remove("bordaShare");
        document.getElementById("bordaShareId").classList.add("bordaShareClick");
        document.getElementById("botaoShareId").classList.remove("botaoShare");
        document.getElementById("botaoShareId").classList.add("botaoShareClick");

        verificador = true;
    }
    else if (verificador == true) {
        document.getElementById("balaoId").classList.remove("balaoOn");
        document.getElementById("balaoId").classList.add("balaoOff");
        document.getElementById("bordaShareId").classList.remove("bordaShareClick");
        document.getElementById("bordaShareId").classList.add("bordaShare");
        document.getElementById("botaoShareId").classList.remove("botaoShareClick");
        document.getElementById("botaoShareId").classList.add("botaoShare");
        verificador = false;
    }
}

botaoShare.addEventListener("click", () => {
    mostrarBalao();
})

fbIcon.addEventListener("click", () => {
    window.location.href ="http://facebook.com"


})

ttIcon.addEventListener("click", () => {
    window.location.href ="http://twitter.com"


})

ptrIcon.addEventListener("click", () => {
    window.location.href ="http://pinterest.com"


})

