import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ReadingsList extends Component {

    createListItems() {
        return this.props.readings.map((reading) => {
            return (
            <li keyParams={reading.id}>Temperature: {reading.temperature} Humidity: {reading.humidity}</li>
            );
        });
    }
    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        readings: state.readings
    };
}

export default connect(mapStateToProps)(ReadingsList);
