import React, { useContext } from 'react'
import userContext from '../pages/_app'
import { NameContext, UserContext } from '@/pages'

function ComponentF() {
    const value = useContext(UserContext)
    const name = useContext(NameContext)
  return (
    <div>
        
            Your value ComponentF {value} -- {name}
      
      
    </div>
  )
}

export default ComponentF
