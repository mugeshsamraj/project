import React, { useState } from "react";

function HookCounterThree(){
    const [name,setName] = useState({firstName:'',lastName:''});
    return(
        <form>
        <input type="text" value={name.firstName} onChange={e=> setName({...name,firstName:e.target.value})} />
        <input type="text" value={name.lastName} onChange={e=> setName({...name,lastName:e.target.value})} />
        <p>firstName - {name.firstName} & lastName - {name.lastName}</p>
        </form>
    )
}
export default HookCounterThree;