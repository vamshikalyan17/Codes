import React, {Component} from "react";


// function Hello(){
//     return <h1>Hello World</h1>
// }

// export const Hello = () => {
//     return (<div>
//         <h1>Helo Vamshi</h1>
//     </div>)
// }

export const Hello = () => {
    return React.createElement('div', {id: 'hello', className: 'vamshi'}, React.createElement('h1', null, 'Hello Vamshi'))
}

// export default Hello;