const game = {
team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [

[
'Neuer',

      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
], [

      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
], ],

  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
}, };
// 1. her komandanin oyunculari ucun ayrica array yaradin : team1 ve team2 adinda (rest operatoru yada sal)
const [team1, team2] = game.players;
console.log('Team 1 Players:', team1);
console.log('Team 2 Players:', team2);



// 2. birinci komandanin birinci oyuncusu qapicidir. Onu goalkeeper adli deyishene teyin edin,
// diger futbolcular fieldPlayers adli array qalsin (rest operatoru yada sal)


const [goalkeeper, ...fieldPlayers] = game.players[0];

console.log('Goalkeeper:', goalkeeper);
console.log('Field Players:', fieldPlayers);



// 3. Butun oyunculari allPlayers adli arrayda saxlayin ( 22 nefer)(spread operatoru)

const allPlayers = [...game.players[0], ...game.players[1]];

console.log(allPlayers);

// 4.Oyunda birinci komandada 3 deyisiklik olub , first FinalPlayer adli arraya ilkin heyeti ve 
// Thiagi,Coutinho, Perisic-i elave edin..(spread operatoru)

const [firstTeam, secondTeam] = game.players;
const firstFinalPlayers = [...firstTeam, 'Thiago', 'Coutinho', 'Perisic'];

game.players = [firstFinalPlayers, secondTeam];
console.log(game.players);

//   5. odds adli obyektin deyisenlerini team1, draw, team2 adli deyisenlere menimsedin  
// (nested object destructing yada sal metodu)
const { odds: { team1 : team1win, x: draw, team2: team2win } } = game;

console.log(team1win); 
console.log(draw);  
console.log(team2win); 
// 6.Emsali az olan komanda udma ehtimali coxdur . if else ve ya ternary operatoru yazamadan consola :Birinci komanda udmaga daha yaxindir,
// ikinci komanda udmaga daha yaxindir yazisini cixardin.



const message =
  (game.odds.team1 < game.odds.team2 && 'Birinci komanda udmaga daha yaxindir') ||
  (game.odds.team1 > game.odds.team2 && 'Ikinci komanda udmaga daha yaxindir') ||
  'Udmanin qazanmaq ehtimali eynidir';

console.log(message);


// const mes =
//   game.odds.team1 < game.odds.team2
//     ? 'Birinci komanda udmaga daha yaxindir'
//     : game.odds.team1 > game.odds.team2
//     ? 'Ikinci komanda udmaga daha yaxindir'
//     : 'Udmanin qazanmaq ehtimali eynidir';

// console.log(mes);
