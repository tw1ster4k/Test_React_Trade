import React from 'react';
import { useState} from 'react';
import './App.css';
import Block from './Component/Block/Block';

function App() {
  const [state, setState] = useState(0)
  const [minutes, setMinutes] = useState(2)
  const arr = [1,2,3,4]


 let a  = setTimeout(()=> {
      setState(state-1)
    }, 1000)
  
if(state <= 0 && minutes <= 0){
  clearTimeout(a)
} else if(state === 0 && minutes > 0){
  setMinutes(minutes-1)
  setState(59)
}


  return (
    <div className="App">

      <div className="Timer">
        <div className="Time">
      {state || minutes ? minutes + ":" + state : "Stop"}
        </div>
      </div>


      <div className='Participants'>
        <div className='Name'>
              Наименование компании
        </div>
        <div className='Participant'>
              Участник1
        </div>
        <div className='Participant'>
        Участник2
        </div>
        <div className='Participant'>
        Участник3
        </div>
        <div className='Participant'>
        Участник4
        </div>

      
      </div>


  <div className='Stats'>

    <div className='Params'>
    <li className="Day" >
            
            Срок изготовления лота
        </li>
        <li className='Month'>
            Гарантийные обстоятельства
        </li>
        <li className='Conditions'>
          Условия оплаты
        </li>
        <li className='Cost'>
              Стоимость
        </li>
    </div>


{arr.map((el, index) =>

<Block key={index} />
)
}
</div>
    </div>
  );
}

export default App;
