// @flow

import React from 'react'
import block from 'bem-cn'

import Icons from './icons'

const b = block('splash-header')

const SplashHeader = () => (
    <div className={b}>
        <img src='assets/logo.svg' className={b('logo')} />
        <h1 className={b('name')}>
            marko mijalkovic
        </h1>
        <Icons />
    </div>
)

export default SplashHeader
