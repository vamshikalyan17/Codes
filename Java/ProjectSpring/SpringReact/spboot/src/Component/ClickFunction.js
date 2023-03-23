import React from 'react'

function ClickFunction() {
    function fc(){
        console.log("Function Clicked")
    }
  return (
    <div>
        <button onClick={fc}>Function click</button>
    </div>
  )
}

export default ClickFunction