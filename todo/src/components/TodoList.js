import React from 'react'


export default function Todolist(props) {
  return (
    <div className="todolist" >
      {props.formData.map((ele)=>{
        return <p>{ele.item}</p>
      })}
    </div>
  )
}
  

  


