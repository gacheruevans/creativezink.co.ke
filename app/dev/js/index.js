import 'babel-polyfill';
import React from 'react';
import {createStore} from 'redux';

const store = createStore();

ReactDOM.render(<h2>Hey Now</h2>,document.getElementById('root'));
