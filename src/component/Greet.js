import React from 'react'

function Greet({name, heroName}) {
    return (
        <div>
            <h1>Hello, world! from {name} and {heroName}</h1>            
        </div>
    )
}

// const Greet=()=>function Greet(props) {
//     return (
//         <div>
//             <h1>Hello, world! from {props.name} and {props.heroName}</h1>            
//         </div>
//     )
// }
export default Greet
