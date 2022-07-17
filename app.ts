 var contador:any = 0;

   var numero : any= document.querySelector("#numero");
   var botones: any = document.querySelectorAll(".boton");

    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {

            var styles:any = (e).currentTarget.classList;

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

           { numero.textContent = contador;} 
        });
    });