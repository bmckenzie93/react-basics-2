import React from 'react'

const char = (props) => {
  return(
    <div className="Char" onClick={props.delClick}>
      {props.char}
    </div>
  )
}

export default char;