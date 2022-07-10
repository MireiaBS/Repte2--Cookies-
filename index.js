

if (document.cookie) {
    document.getElementById("modal").style.display = "none";
} else {
    document.getElementById("modal").style.display = "display"
}

function acceptCookies() {

    document.cookie = "usuario = Mireia Barrufet;";
    document.cookie = "sexo = mujer;"   

    console.log('Cookies actualmente --> ',document.cookie)
};
function cleanCookies() {
    document.cookie = "usuario=; expires= MON, 04 Jul 2022 00:00:01 GTM";
    document.cookie = "sexo=; expires= MON, 04 Jul 2022 00:00:01 GTM";
    alert('Se han borrado todas las cookies');

    console.log('Sin cookies -->',document.cookie.value)
}

function closeModal() {
    document.getElementById("modal").style.display = "none"
};
