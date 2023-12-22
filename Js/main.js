const prezzo_per_km = 0.21
const sconto_minorenni= 20 / 100
const sconto_over_65=40 / 100
let età= prompt("inserisci la tua età: ")
let km_da_percorrere=prompt("inserisci i km che vuoi percorrere ")
if ((isNaN(età)) || (isNaN(km_da_percorrere))){
    alert("inserisci un valore numerico!")
}else if (età>0 && età<18){
    let prezzo_minorenni=(Math.round(prezzo_per_km*km_da_percorrere*sconto_minorenni*100)/100)
    document.writeln(`Sei minorenne hai diritto ad un prezzo ridotto del 20%, il prezzo del tuo biglietto è di: ${prezzo_minorenni}€`)
}