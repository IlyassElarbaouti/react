import Greeting from './Greeting';
import React from 'react';
import ReactDOM from "react-dom";
import './index.scss'
const rootElem = document.querySelector('#root')
ReactDOM.render(<Greeting firstName='John' lastName='Doe' dateString='2001-01-01T11:11:11.819Z'/>,rootElem)