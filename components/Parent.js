import React, { useCallback, useState } from 'react'
import Count from './Count'
import Button from './Button'

function Parent() {
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(25000)
    const handleAge = useCallback(()=>{
        setAge(age+1);
    },[age])
    const handleSalary = useCallback(()=>{
        setSalary(salary+1000);
    },[salary])
  return (
    <div>
      UseCallBack Hooks
      <Count name='Age' Count={age} />
      <Button name="Age Increment" handleClick={handleAge}  />
      <Count name='Salary' Count={salary} />
      <Button name="Salary Increment" handleClick={handleSalary} />

    </div>
  )
}

export default Parent
