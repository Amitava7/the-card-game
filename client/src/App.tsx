import type { FC } from 'react';
import Card from './Card';

import './App.scss'
interface Props {}

const App: FC<Props> = () => {
  return (<div>App 2
<Card suit='spades' value='ace'/>
<div className="poker-container">
    <div className="poker-table">
        <div className="outside-ring"></div>
        <div className="inside-ring"></div>
    </div>
</div>


  </div>);
}

export default App;
