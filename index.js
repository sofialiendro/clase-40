// // // en esta funcion podemos ir eligiendo entre q numeros queremos el random

// // const obtenerOtroNumeroAlAzar = (min, max) => {
// //     return Math.round(Math.random() * (max - min) + min)
// // }

// // console.log(obtenerOtroNumeroAlAzar(0, 100))

const grilla = document.querySelector(".grilla")
// // // Ej 4

// const obtenerNumeroAlAzar = () => {
//     return Math.floor((Math.random() * 6))  // entre 0 y 5
// }

// obtenerNumeroAlAzar()

// const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊']


// const obtenerFrutaAlAzar = (items) => {
//     return items[obtenerNumeroAlAzar()]
//     // return items[Math.floor((Math.random() * items.length))] // version sin la fx obtenerNumeroAlAzar
// }

// // console.log(obtenerFrutaAlAzar(items))


// // Ej 5

// let listaDeFrutas = []

// // listaDeFrutas[0] = obtenerFrutaAlAzar(items)
// // listaDeFrutas[1] = obtenerFrutaAlAzar(items)
// // listaDeFrutas[2] = obtenerFrutaAlAzar(items)
// // listaDeFrutas[3] = obtenerFrutaAlAzar(items)
// // listaDeFrutas[4] = obtenerFrutaAlAzar(items)
// // listaDeFrutas[5] = obtenerFrutaAlAzar(items)

// // console.log(listaDeFrutas)


// for (let i = 0; i < 16; i++) {
//     listaDeFrutas[i] = obtenerFrutaAlAzar(items)
// }

// // console.log(listaDeFrutas)

// const divsDeGrilla = document.querySelectorAll(".grilla > div")

// // grilla.innerHTML = `
// //     <div>${obtenerFr utaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// //     <div>${obtenerFrutaAlAzar(items)}</div>
// // `

// grilla.innerHTML = ''
// console.log(listaDeFrutas)

// for (let i = 0; i < listaDeFrutas.length; i++) {
//     grilla.innerHTML += `<div>${listaDeFrutas[i]}</div>` 
// }




// // VARIABLE ACUMULADORA
// siempre se declaran inmediatamente antes del for
// se declaran con valor vacio, 0 para numeros, "" para strings
// en cada vuelta del for se usa += para ir acumulando los valores del array

// const nombres = ["sol", "angie", "rebe"]
// let nombresEnString = ''
// for (let i = 0; i < nombres.length; i++) {
 //   console.log("estoy en la vuelta", i)
//   nombresEnString += nombres[i]  
// }

// const numeros = [1, 8, 7, 4, 9, 9]
// let total = 0
// for (let i = 0; i < numeros.length; i++) {
//   console.log("estoy en la vuelta", i)
//   total += numeros[i]
//   console.log(total)
// }


const crearGrilla = (ancho, alto) => {
    const anchoDeGrilla = 50 * ancho
    grilla.style.width = `${anchoDeGrilla}px`
    // alternativa
    // grilla.style.width = String(anchoDeGrilla) + 'px'
    // grilla.style.width = anchoDeGrilla + 'px'
  
    const obtenerNumeroAlAzar = () => {
    return Math.floor((Math.random() * 6 ))  
    }
  
    const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊']
  
    const obtenerFrutaAlAzar = (items) => {
      return items[obtenerNumeroAlAzar()]
    }
  
    const listaDeFrutas = []
  
    for (let i = 0; i < alto * ancho; i++) {
      listaDeFrutas[i] = obtenerFrutaAlAzar(items)
    }
  
    grilla.innerHTML = ''
    for (let i = 0; i < listaDeFrutas.length; i++) {
      grilla.innerHTML += `<div>${listaDeFrutas[i]}</div>`
    }
}
  
crearGrilla(6, 6)