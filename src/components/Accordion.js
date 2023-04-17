import React, {useState} from 'react'
import './Accordion.css';
import {questions} from './data';
import { MyAccordion } from './MyAccordion';


 export const Accordion = () => {

  const [data, setData] = useState(questions);
  return (
    <main>
      <div className='container'>
        <h2>FAQs</h2>
        <section>
          {data.map((CurElem => {
            // return CurElem.id;
            return <MyAccordion key={CurElem.id} {...CurElem}/>
          }))}
        </section>
      </div>
    </main>
  )
}
  