import type { FC } from 'react';
import Card from './Card';

import './App.scss'
interface Props { }

const App: FC<Props> = () => {
  return (
  <div className='play-arena'>
    <div className="poker-container">
      <div className="poker-table">
        <div className="outside-ring"></div>
        <div className="inside-ring"></div>
      </div>
    </div>
    <div className="player-container">
      <Card suit='spades' value='ace' />
      <Card suit='hearts' value='king' />
      <Card suit='hearts' value='queen' />
      <Card suit='clubs' value='9' />
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
