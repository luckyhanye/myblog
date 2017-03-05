import React from 'react';
import {render} from 'react-dom';
// import "./component/reset.css";
import "./component/main.css";
import "highlight.js/styles/atom-one-light.css";     //引用css样式,语法样式


import Routes from './routes.js';

render(<Routes />,document.getElementById('root'));
