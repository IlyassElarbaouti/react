import Profile from './Profile.jsx';
import React from 'react';
import ReactDOM from "react-dom";


const userData = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
};

const root = document.querySelector('#root')
ReactDOM.render(<Profile userData={userData}/>,root)