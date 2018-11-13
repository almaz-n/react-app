import React from 'react';
import ReactDOM from 'react-dom';

//React компонент функциональный
const Hello = () => {
    return (
        <h1>Hello, React</h1>
    )
}

ReactDOM.render(
    <Hello/>,
    document.getElementById('root')
);
