import React, { Component } from 'react'
import { addTodo } from '../actions/actions'


export default function Todolist(props) {
  
// const handleAddTodo=()=>{
//   dispatch(props.addTodo(props.formData)
// }

  
  return (
        <div>
          <div >
            {props.formData.map((ele)=>{
              return <p>{ele.item}</p>
            })}
          </div>
        </div>
    )
}
