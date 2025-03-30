import React from 'react'

function Count({name,Count}) {
  return (
    <div>
        {console.log(`rendening ${name}`)}
      {name} - {Count}
    </div>
  )
}

export default React.memo(Count)
