import React from 'react'
import block from 'bem-cn'

const b = block('header')

const styleFrom = (visibility: number): {opacity: number} => {
    return {
        opacity: Math.min(visibility * 2.2 - 1.0, 1)
    }
}

const Header = ({visibility}: {visibility: number}) => (
    <div className={b} style={styleFrom(visibility)}>
        <a href="https://github.com/overdrivenpotato">GitHub</a>
        <img src="assets/logoblack.svg" className={b('logo')} />
        <a href="/about">About</a>
    </div>
)

export default Header
