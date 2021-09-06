import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    console.log(props);
    return (
        <button className={props.className} onClick={props.click}>{props.title}</button>
    )
}


export default Button

