import React from 'react'

function Button({name,handleClick}) {
  return (
    <div>
       {console.log(`rendening ${name}`)}
      <button onClick={handleClick}>{name}</button>
    </div>
  )
}

export default React.memo(Button)
