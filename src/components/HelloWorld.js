import React from 'react';

// stateless/functional component
function HelloWorld(prop) {
    return (
        <h1>Hello {prop.name}</h1>
    )
}


// class component
// class HelloWorld extends React.Component {
//     render() {
//         return (
//             <h1>Hello {this.props.name}!</h1> // for class components use this.props.name
//         )
//     }
// }

export default HelloWorld;