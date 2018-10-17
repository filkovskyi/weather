import React from 'react';
import _ from 'lodash';

import { Sparklines, SparklinesLine , SparklinesReferenceLine} from 'react-sparklines';

function averege(data) {
    return _.round(_.sum(data)/data.length)
}

export default (props) => {
    return (
        <div>
            {console.log(props)}
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{averege(props.data)} {props.units}</div>
        </div>
    )
};
