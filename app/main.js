/*const  greet = require('./Greeter.js');
document.querySelector('#root').appendChild(greet());*/

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css';

render(<Greeter/>,document.getElementById('root'));