const prezzo_per_km = 0.21
const sconto_minorenni= 20 / 100
const sconto_over_65=40 / 100
let età= prompt("inserisci la tua età: ")
let km_da_percorrere=prompt("inserisci i km che vuoi percorrere ")
if ((isNaN(età)) || (isNaN(km_da_percorrere))){
    alert("inserisci un valore numerico!")
}else if (età>=0 && età<18){
    let prezzo_minorenni=(Math.round(((prezzo_per_km*km_da_percorrere)-(prezzo_per_km*km_da_percorrere*sconto_minorenni))*100)/100)
    document.writeln(`Sei minorenne hai diritto ad un prezzo ridotto del 20%, il prezzo del tuo biglietto è di: ${prezzo_minorenni}€`)
}else if (età>= 18 && età<65){
    let prezzo_pieno=(Math.round(prezzo_per_km*km_da_percorrere*100)/100)
    document.writeln(`Rientri in una fascia di età che non prevede sconti, il prezzo del tuo biglietto è di: ${prezzo_pieno}€`)
}else{
    let prezzo_over_65=(Math.round(((prezzo_per_km*km_da_percorrere)-(prezzo_per_km*km_da_percorrere*sconto_over_65))*100)/100)
    document.writeln(`rientri in una fascia di età per la quale hai diritto ad un prezzo scontato del 40%, il prezzo del tuo biglietto è di: ${prezzo_over_65} €`)
}