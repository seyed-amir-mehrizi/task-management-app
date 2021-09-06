import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function Header(props) {
    const addColor=()=>{
        alert("sd;;clmdklmcklsmld")
    }
    return (
        <>
            <span className="d-flex justify-content-between align-items-center">
                <div>
                    task management
                </div>
                <div>
                <Button click={addColor}  title="+" className="btn btn-primary"/>
                </div>

            </span>

        </>

    )
}

export default Header

