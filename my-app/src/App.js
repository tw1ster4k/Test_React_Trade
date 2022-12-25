import React from 'react';
import { useState} from 'react';
import './App.css';
import Block from './Component/Block/Block';

function App() {
  const arr = [1,2,3,4]
  let Timer = new Date();
  
  const [second, setSecond] = useState(59 - Timer.getSeconds())
  const [minutes, setMinutes] = useState(Timer.getMinutes() % 2 === 0 && second === 0 ? 2 : Timer.getMinutes() % 2 )

  

        setTimeout(() => {

          if(Number(second) > 0){
            setSecond(Number(second) - 1)
          }else if(Number(second) === 0 && Number(minutes) > 0){
              setMinutes(Number(minutes) - 1)
              setSecond(59)
          }else if(Number(second) === 0 && Number(minutes) === 0){
            setMinutes(2)
            setSecond(0)
          }
        }, 1000)




console.log(minutes + ":" + second)


  return (
    <div className="App">

      <div className="Timer">
        <div className="Time">
          {minutes < 10  && second < 10 ? `0${minutes}:0${second}` : `0${minutes}:${second}`}
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
