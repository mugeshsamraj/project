import { CountContext } from '@/pages'
import React, { useContext } from 'react'

function ComponentOneD() {
    const countContext = useContext(CountContext)
  return (
    <div>
      ComponentOneD - {countContext.countState}
      <button onClick={()=> countContext.counterDispatch("INCREMENT")}>Increment</button>
        <button onClick={()=> countContext.counterDispatch("DECREMENT")}>Decrement</button>
        <button onClick={()=> countContext.counterDispatch("RESET")}>Reset</button>
    </div>
  )
}

export default ComponentOneD
