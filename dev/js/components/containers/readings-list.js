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
    TableRow,
    Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    table: {
        maxHeight: 440,
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
        //const records = this.props.readings;
        
        return (
            <Paper className={useStyles.root}>
                <TableContainer component={Paper}>
                    <Table className={useStyles.table} stickyHeader aria-label="sticky table">
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
            </Paper>
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
