//1
    document.querySelector("#ej1bot").addEventListener("click", () => {
    let nombre = document.getElementById("ej1ing").value;
    console.log("Buenos días " + nombre)

    })

//2

document.querySelector("#ej2bo").addEventListener("click", () => {
    let suma = (Ej2pr,Ej2se) => Ej2pr + Ej2se
    let resta = (Ej2pr,Ej2se) => Ej2pr - Ej2se
    let multiplicacion = (Ej2pr,Ej2se) => Ej2pr * Ej2se
    let division = (Ej2pr,Ej2se) => Ej2pr / Ej2se


    console.log ("Suma: " + suma + "Resta: " + resta + "Multipliciación: " + multiplicacion + "División: " + division)
})
