import React from 'react'

export default function Validation(props) {
  const length = props.length;
  let answer = null
  
  if(length < 4) {
    answer = <div className="Validation">
                <h1>Text Too Short...</h1>
              </div>

  } else if (length > 5) {
    answer = <div className="Validation">
                <h1>Text Too Long...</h1>
              </div>
  } else {
    answer = <div className="Validation">
                <h1 style = {{color: 'green'}}>---------</h1>
              </div>
  }

  return answer;
}
