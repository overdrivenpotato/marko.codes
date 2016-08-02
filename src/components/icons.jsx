// @flow

import React from 'react'
import block from 'bem-cn'

const b = block('icons')

const Icons = () => (
    <div className={b}>
        <a href='https://marko.codes/blog'>
            <img src='assets/a.svg' className={b('icon', {link: 'blog'})} />
        </a>
        <a href='mailto:marko@marko.codes'>
            <img src='assets/e.svg' className={b('icon', {link: 'mail'})} />
        </a>
        <a href='https://github.com/overdrivenpotato'>
            <img src='assets/g.svg' className={b('icon', {link: 'opensource'})} />
        </a>
    </div>
)

export default Icons
