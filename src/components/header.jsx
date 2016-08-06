import React from 'react'
import block from 'bem-cn'

const b = block('header')

const Header = ({opacity = 0}: {opacity: number}) => (
    <div className={b} style={{opacity}}>
        <a href="https://github.com/overdrivenpotato">GitHub</a>
        <img src="assets/logoblack.svg" className={b('logo')} />
        <a href="/about">About</a>
    </div>
)

export default Header
