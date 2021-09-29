import React from 'react';
import ReactDOM from "react-dom";
import Comment from './Comment.jsx';
import './styles.scss'
const rootElem = document.querySelector('#root')
ReactDOM.render(<Comment  user={{name:'Ilyass',avatarUrl:'https://avatars.githubusercontent.com/u/63542705?s=96&v=4'}} text='Good job!' date={new Date()}/>,rootElem)