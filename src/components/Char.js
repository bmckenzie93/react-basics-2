import React from 'react'

export default function Char(props) {
  return (
    <div className="Char">
      <p>{props.char} <span>{props.index}</span></p>
    </div>
  )
}
