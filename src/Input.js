import React from 'react'

function Input() { 

    const styles={
        padding:'40px',
        height:'10px',
        width:'560px',
        fontSize:'35px',
        margin:'30px'
    }
    return (
        <div>
            <input id="sentence" style={styles} placeholder="Enter text to analyse"></input>
        </div>
    )
}

export default Input
