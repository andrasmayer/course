import {Shuffle, MinValue, MaxValue} from '../hooks/arrayShuffle';

export const ArrayFunctions = (props) => {

    return (
         <div>
            <div>Original array: {    JSON.stringify(  props.data  )  }</div>
            <div>Shuffled array: {    JSON.stringify(  Shuffle(props.data)    )  }</div> 
            <div>Min value: {    JSON.stringify(  MinValue(props.data)    )  }</div>
            <div>Max value: {    JSON.stringify(  MaxValue(props.data)    )  }</div>
        </div>
    );


}