
const letters = 'asdadB'
let se = letters.split("");
let asciiCode = []


  
const ascii = letters =>{

se.forEach((elem, indice) =>{
asciiCode[indice] = se[indice].charCodeAt(0);
})
let final = asciiCode.join(" ");
console.log(final)

}

ascii();


