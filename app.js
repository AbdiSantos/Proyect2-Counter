var contador = 0;
var numero = document.querySelector("#numero");
var botones = document.querySelectorAll(".boton");
botones.forEach(function (boton) {
    boton.addEventListener("click", function (e) {
        var styles = (e).currentTarget.classList;
        if (styles.contains("restar"))
            contador--;
        if (styles.contains("reset"))
            contador = 0;
        if (styles.contains("sumar"))
            contador++;
        if (contador > 0)
            numero.style.color = " green ";
        if (contador < 0)
            numero.style.color = "red";
        if (contador === 0)
            numero.style.color = "white";
        {
            numero.textContent = contador;
        }
    });
});
