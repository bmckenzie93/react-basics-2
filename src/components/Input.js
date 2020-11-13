import React from 'react'

export default function Input(props) {
  return (
    <div>
      <input type="text" 
      className="Input" 
      value={props.value}
      onChange={props.getLength}/>
      <p style={{textAlign: 'center', fontSize: '2rem'}}>{props.currentLength}</p>
    </div>
  )
}
