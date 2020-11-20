import React from 'react'

const validation = (props) => {
  const textLength = props.textLength;
  let validationMessage = 'Text long enough!';

  if(textLength < 5) {
    validationMessage = 'Text too short...'
  }

  return(
    <div>
      <p>{validationMessage}</p>
    </div>
  )
}

export default validation;