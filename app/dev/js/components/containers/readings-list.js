import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getData} from '../../actions/index';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow ,
    Paper } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

class ReadingsList extends Component {

    createListItems() {
        return (
            this.props.readings.map((reading) => {
                return (
                    <TableRow  key={reading.id} onClick={()=> this.props.getData(reading)}>
                        <TableCell component="th" scope="row">
                            {reading.id}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {reading.temperature}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {reading.humidity}
                        </TableCell>
                    </TableRow>
                )
            })
        );
    }
    render() {
        return (
            <TableContainer component={Paper}>
                <Table className={useStyles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell >No'</TableCell>
                            <TableCell>Temperature</TableCell>
                            <TableCell>Humidity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.createListItems()}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        readings: state.readings
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({getData: getData}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ReadingsList);
