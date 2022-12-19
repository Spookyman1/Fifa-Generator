import * as React from 'react';
import './App.css';
const teams = [
  'https://logos-world.net/wp-content/uploads/2020/06/PSG-emblem.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Juventus_FC_2017_logo.svg/1031px-Juventus_FC_2017_logo.svg.png',
   'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png', 
   'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png', 
   'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg', 
   'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png', 
   'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png', 
   'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png', 
   'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png', 
   'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png', 
   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png', 
   'https://logodownload.org/wp-content/uploads/2017/02/inter-milan-logo-1.png', 
   'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png',
   'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png',
   'https://banner2.cleanpng.com/20180601/get/kisspng-afc-ajax-de-klassieker-feyenoord-uefa-europa-leagu-ajax-5b112784c48bc2.3378279715278508848051.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/541px-Logo_of_AC_Milan.svg.png',
   'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/255px-Arsenal_FC.svg.png'

   
  ];
const num = teams.length;

const P1 = 'p1';
const P2 = 'p2';

const P1_WON = 'Player 1 Won!';
const P2_WON = 'Player 2 Won!';
const RANDOM_TEXT = 'New Match';


const App = () => {  
  const [index1, setIndex1] =  React.useState(Math.floor(Math.random()*(num)))
  const [index2, setIndex2] = React.useState(Math.floor(Math.random()*(num)))
  const [p1Wins, setP1Wins] = React.useState(localStorage.getItem(P1));
  const [p2Wins, setP2Wins] = React.useState(localStorage.getItem(P2));
  const hen = React.useMemo(() => teams[index1], [index1]);
  const ben = React.useMemo(() => teams[index2], [index2]);

  const generateRandom = () => Math.floor(Math.random()*(num)); 

  const shuffle = () => {
    const random1 = generateRandom();
    const random2 = generateRandom();

    setIndex1(prev => prev === random1 ? generateRandom() : random1);
    setIndex2(prev => prev === random2 ? generateRandom() : random2);
  }

  const addWin = (winner) => {
    const score = localStorage.getItem(winner);
    score ? localStorage.setItem(winner, parseInt(score) + 1) : localStorage.setItem(winner, 1);
    P1 === winner ? setP1Wins(score ? parseInt(score) + 1 : 1) : setP2Wins(score ? parseInt(score) + 1 : 1)
  }

React.useEffect(() => {
  if(hen === ben) {
    shuffle();
  }
}, [hen, ben])

React.useEffect(() => console.log(index1, index2), [index1, index2])


  return (
    <div className='content'>
      <div className='match'>
        <div className='align'>
          <span>total wins: {p1Wins ? p1Wins : 0}</span>
          <img width ='100vw' height='100vh' src ={hen} /> 
          <button onClick={() => addWin(P1)}>
            {P1_WON}
          </button>
        </div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VLYlmtF68K5q7VwMF7AInZxQrldSlLDdyA&usqp=CAU' />
        <div className='align'>
        <span>total wins: {p2Wins ? p2Wins : 0}</span>
          <img src = {ben} width ='100vw' height='100vh' />
          <button onClick={() => addWin(P2)}>
            {P2_WON}
          </button>
        </div>
      </div>
      <button onClick={shuffle}>{RANDOM_TEXT}</button>
    </div>
  );
}

export default App;
