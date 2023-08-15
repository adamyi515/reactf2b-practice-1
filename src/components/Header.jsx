import React from 'react'

const Header = ({ bgColor = 'rgba(0, 0, 0, .2)', color = '#ff6a95'}) => {
    const style = {
        color: color,
        backgroundColor: bgColor
    }


    return (
        <header style={style}>
            <h1>Feedback UI</h1>
        </header>
    )
}

export default Header