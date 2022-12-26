import React from 'react';
import { useState} from 'react';
import './App.css';
import Block from './Component/Block/Block';
import { cn } from '@bem-react/classname';

function App() {
  const arr = ["one","two","three","four"]
  let Timer = new Date();
  const cnParticipant = cn('Participant')
  
  const [number, setNumber] = useState(localStorage.getItem('count') || 0)
  const [second, setSecond] = useState(59 - Timer.getSeconds())
  const [minutes, setMinutes] = useState(Timer.getMinutes() % 2 === 0 && second === 0 ? 2 : Timer.getMinutes() % 2 )

        let Time =  <div className={cnParticipant(`Timer`,{position: arr[number]})}>
         <div className="Time">
        {minutes < 10  && second < 10 ? `0${minutes}:0${second}` : `0${minutes}:${second}`}
            </div>
        </div>
  


        setTimeout(() => {

          if(Number(second) > 0){
            setSecond(Number(second) - 1)
          }else if(Number(second) === 0 && Number(minutes) > 0){
              setMinutes(Number(minutes) - 1)
              setSecond(59)
          }else if(Number(second) === 0 && Number(minutes) === 0){
            setMinutes(2)
            setSecond(0)
            setNumber(Number(number)+1 >= arr.length ? 0 : Number(number) + 1 )
            localStorage.setItem("count", Number(number) + 1 >= arr.length? 0 : Number(number) + 1)
          }
        }, 1000)


//console.log(localStorage.getItem('count'))
 


  return (
    <div className="App">

  
          {Time}
      


      <div className='Participants'>
        <div className='Name'>
              Наименование компании
        </div>
        {arr.map((el, index) => 
        <div className={cnParticipant(index)} key={index}>
              Участник {el}
        </div>
        )}
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
