// @flow

import React from 'react'
import block from 'bem-cn'

import SplashHeader from './splash-header'

const b = block('splash')

class Splash extends React.Component {
    props: {
        scroll: () => void
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        return <div className={b}>
            <div className={b('background-wrapper')}>
                <div className={b('background')}></div>
            </div>
            <div className={b('gradient')}></div>
            <SplashHeader />
            <div className={b('arrow')} onClick={this.props.scroll}></div>
        </div>
    }
}

export default Splash
