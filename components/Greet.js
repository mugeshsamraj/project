import react from "react";
// props destr in methods 
// function Greet({title,power,children}){   method one
function Greet(props){
    const {title,power,children} = props  // method two 

    return (
        <div> 
            <p>Hello {title} a.k.a {power}</p>
            {children}
        </div>
    )
    
}
export default Greet;