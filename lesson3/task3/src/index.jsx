import React from 'react';
import ReactDOM from "react-dom";
import Comment from './Comment.jsx';
import './styles.scss'
const rootElem = document.querySelector('#root');
const userInfo = {
  name: 'Ilyass',
  avatarUrl: 'https://avatars1.githubusercontent.com/users',
};
ReactDOM.render(<Comment author={userInfo} text="Good job" date={new Date()}/>,rootElem)