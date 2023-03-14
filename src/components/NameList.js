import React from 'react'
import Person from './Person'

function NameList() {
    // const names =["Bruce","Clark","Diana"]
    const persons =[
      {
        id:1,
        name:"Moid",
        age:23,
        skills:"java"
      },
      {
        id:2,
        name:"Juned",
        age:24,
        skills:"Python"
      },
      {
        id:3,
        name:"Nakul",
        age:22,
        skills:"Sql"
      }
    ]
    const personlist = persons.map(person => <Person  key={person.id} person ={person}/> )
    return <div>{personlist}</div>
  return (
    <div>
        {
           

        }
    </div>
  )
}

export default NameList