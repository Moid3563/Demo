import React from 'react'

export const MyAccordion = ({question, answer}) => {
  return (
    <>
    <div className='main-heading'>
    <h1>{question}</h1>
    </div>
    <p>{answer}</p>
    
    </>
  )
}
