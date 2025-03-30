import { CountContext } from '@/pages'
import React, { useContext } from 'react'

function ComponentOneA() {
    const countContext = useContext(CountContext)
  return (
    <div>
      ComponentOneA - {countContext.countState}
      <button onClick={()=> countContext.counterDispatch("INCREMENT")}>Increment</button>
        <button onClick={()=> countContext.counterDispatch("DECREMENT")}>Decrement</button>
        <button onClick={()=> countContext.counterDispatch("RESET")}>Reset</button>
    </div>
  )
}

export default ComponentOneA
