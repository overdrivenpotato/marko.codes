// @flow
import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import block from 'bem-cn'

import FrontPage from './components/frontpage'

block.setup({
    mod: '--',
    el: '__',
    modValue: '_'
})

render(
    <FrontPage />,
    document.getElementById('root')
)
