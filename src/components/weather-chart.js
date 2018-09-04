import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return Math.round(_.sum(data) / data.length);
}

export default props => (
    <div>
        <Sparklines data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>Avg: {average(props.data)} {props.units}</div>
    </div>
);
