// --> ES. 25/01 <--
// ! ESERICIZIO 1
// let garage = {
//     'logo' : 'bugatti',
//     'modello' : 'chiron',
//     'prezzo'  : 300000,
//     'serieAudi' : [
//         {'nome' : 'q8', 'costo' : 70000 },
//         {'nome' : 's7', 'costo': 90000 },
//         {'nome' : 'rs3', 'costo': 60000 },
//     ],
    
//     garage : function() {
//     }
// };
// console.log(garage);


// ? ESERCIZIO 2
// let smartphone = {
//     'marca' : 'iphone',
//     'modello' : 11,
//     'prezzo'  : 900,
//     'rubrica' : [
//         {'nome' : 'Nicola', 'numero' : 3734558978},
//         {'nome' : 'Franco', 'numero': 3956645342},
//         {'nome' : 'Mario', 'numero': 3545635563},
//     ],
    
//     'chiama' : function() {
//     }
// };
// console.log("smartphone");

//* ESERICIZIO 3

const Bowling = {
    players: [
        {nome : 'aldo', punti : [10, 9, 8, 7, 9, 2, 4 ,6 ,8, 10]},
        {nome : 'giovanni', punti : [1, 3, 5, 7, 9, 2, 4 ,6 ,8, 10]},
        {nome : 'giacomo', punti : [1, 2, 5, 7, 9, 2, 4 ,6 ,8, 0]},
    ],
    puntiFinali : function(){
        this.players.forEach((giocatore)=> giocatore.puntiFinali = giocatore.punti.reduce((acc, n)=> acc + n)
    )}
}
Bowling.puntiFinali();

console.log(Bowling);