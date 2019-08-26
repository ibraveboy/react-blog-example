import React from 'react'
import { connect } from "react-redux";
import { increaseValue, decreaseValue } from "./actions"

const MyNewCompnent =(props)=> {
    console.log(props)
    return (
        <div>
            My New Component {props.value}
            <br/>
            <button onClick={props.increaseValue}>Add</button>
            <button onClick={props.decreaseValue}>Sub</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        value : state.value
    }
}

export default connect(mapStateToProps, {
    increaseValue,
    decreaseValue
})(MyNewCompnent)