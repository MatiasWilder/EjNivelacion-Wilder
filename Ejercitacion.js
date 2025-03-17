//1
    document.querySelector("#btn").addEventListener("click", () => {
    let nombre = document.getElementById("ing").value;
    console.log("Buenos días " + nombre);

    })

//2

    document.querySelector("#btn2").addEventListener("click", () => {
    let Num1 = document.getElementById("ing21").value;
    let Num2 = document.getElementById("ing22").value;
    const suma = (Num1,Num2) => Num1 + Num2;
    const resta = (Num1,Num2) => Num1 - Num2;
    const multiplicacion = (Num1,Num2) => Num1 * Num2;
    const division = (Num1,Num2) => Num1 / Num2;


    console.log ("Suma: " + suma(Num1,Num2) + " Resta: " + resta(Num1,Num2) + " Multipliciación: " + multiplicacion(Num1,Num2) + " División: " + division(Num1,Num2));
})


//3
    document.querySelector("#btn3").addEventListener("click", () => {
    let Num = document.getElementById("ing3").value;
    if(Num % 2 === 0) {
        console.log("Es par");
        return true; 
        }
        else {
        console.log ("Es Impar");
            return false; 
        }
        }
)

//4

    document.querySelector("#btn4").addEventListener("click", () => {
    let Contar = document.getElementById("ing4").value;

    console.log(Contar.length);


})

//5
    document.querySelector("#btn5").addEventListener("click", () => {
    let frase = document.getElementById("ing51").value;
    let cant = document.getElementById("ing52").value;

    for(let i=0; i > cant;i++ ){

        console.log(frase);
    }


})

//6
    document.querySelector("#btn6").addEventListener("click", () => {
    let Num6 = document.getElementById("ing6").value;

    console.log(Num6 * 1 );
    console.log(Num6 * 2 );
    console.log(Num6 * 3 );
    console.log(Num6 * 4 );
    console.log(Num6 * 5 );
    console.log(Num6 * 6 );
    console.log(Num6 * 7 );
    console.log(Num6 * 8 );
    console.log(Num6 * 9 );
    console.log(Num6 * 10 );

})


//7
    document.querySelector("#btn7").addEventListener("click", () => {
    let Num7 = document.getElementById("ing7").value;

    if(Num7>rng){
        console.log("El número que buscas es menor");

    } else if(Num7<rng){
        console.log("El número que buscas es mayor");
    }else{
        console.log("Encontraste el número: " + rng);
    }

})

    const rng = Math.floor(Math.random(10)) + 1;



//8
    document.querySelector("#btn8").addEventListener("click", () => {
    let palabra = document.getElementById("ing8").value;
    var contador = 0;
    for (let i=0; i < palabra.length; i++) {
        if (palabra[i] == 'a' || palabra[i]  == 'e' || palabra[i]  == 'i' || palabra[i]  == 'o' || palabra[i]  == 'u') {
            contador++;
        }
    } 
    console.log("Cantidad de vocales: " + contador)
}
)


//9
    document.querySelector("#btn9").addEventListener("click", () => {
    let palabraR = document.getElementById("ing9").value;

    console.log("Palabra en reversa: " + palabraR.split("").reverse().join(''));

})


//10
    document.querySelector("#btn10").addEventListener("click", () => {
    let palabraP = document.getElementById("ing10").value;
    const invertido = palabraP.split("").reverse().join("");

    if (palabraP === invertido) {
        console.log("es palindromo");
      } else {
        console.log("no es palindromo");
      };

})