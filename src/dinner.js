import React from 'react'

function Dinner(props){
    return (
        <div>
            <h1>My Name is {props.StudentName} .</h1>
            <h1>I am {props.StudentAge} years old.</h1>
        </div>
    )
}
export default Dinner;