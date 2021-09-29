import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElem = document.querySelector('#root');
const seconds = new Date().getSeconds();
const bgColor = seconds%2===0 ? 'white' : 'black';
const color = seconds%2===0 ? 'black' : 'white';
const styles = {
    backgroundColor:bgColor,
    color
};
const elem = (
<div 
className='seconds'
style={styles}
>
    Now is {seconds}
</div>
)
ReactDOM.render(elem,rootElem)