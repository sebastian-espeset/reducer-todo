import React from 'react'
import TodoForm from './TodoForm'


export default function Todo(props) {
    return (
        <div>
          <TodoForm/>
          <div>
            {props.item}
          </div>
        </div>
    )
}
