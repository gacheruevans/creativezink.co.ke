import React from 'react';
import ReadingsList from './containers/readings-list';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Temperature and Humidity</h2>
        <hr/>
        <h2>Readings:</h2>
        <ReadingsList />
    </div>
);

export default App;
