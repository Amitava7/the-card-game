import { useState, type FC } from 'react';
import Card from './Card';
import { getFreshHands } from './utils';
import './App.scss'
interface Props { }

const App: FC<Props> = () => {

  const [playerCards, setplayerCards] = useState<string[]>([""]);
  const [tableCards, setTableCards] = useState<string[]>([""]);
  const hands = getFreshHands()[0]
  return (
  <div className='play-arena'>
    <div className="poker-container">
      <div className="poker-table">
        <div className="outside-ring"></div>
        <div className="inside-ring"></div>
      </div>
    </div>
    <div className="player-container">
    {
      hands.map((card, index) => <Card key={index} value={card} />)
    }
    </div>

    <div className="partner-container">
      <Card back />
      <Card back />
      <Card back />
      <Card back />
    </div>
    <div className="op1-container">
      <Card back />
      <Card back />
      <Card back />
      <Card back />
    </div>
    <div className="op2-container">
      <Card back />
      <Card back />
      <Card back />
      <Card back />
    </div>

  </div>);
}

export default App;
