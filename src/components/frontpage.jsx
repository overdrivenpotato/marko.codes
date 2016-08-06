// @flow

import React from 'react'
import block from 'bem-cn'
import { easeOutQuint } from 'easing-utils'

import Splash from './splash'
import Content from './content'
import Header from './header'
import { scrollDiv, clamp } from '../util'

const b = block('front-page')

class FrontPage extends React.Component {
    view: React.DOM.div
    content: React.DOM.div

    state: {
        opacity: number,
    }

    constructor() {
        super()

        this.state = {
            opacity: 0,
        }
    }

    handleScroll(): void {
        this.setState({opacity: this.headerVisibility()})
    }

    componentDidMount(): void {
        window.addEventListener('resize', this.handleScroll)
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleScroll)
    }

    animateScroll(): void {
        scrollDiv(this.view, this.content.offsetTop, 1.0)
    }

    headerVisibility(): number {
        if(!this.view) return 0

        const progress = this.view.scrollTop / this.view.offsetHeight
        return clamp(progress * 2.2 - 1.0, 0, 1)
    }

    render() {
        return <div className={b}>
            <Header opacity={this.state.opacity} />
            <div className={b('perspective')}
                 onScroll={this.handleScroll.bind(this)}
                 ref={ref => this.view = ref}>
                <Splash scroll={this.animateScroll.bind(this)} />
                <div className={b('content')} ref={ref => this.content = ref}>
                    <Content />
                </div>
            </div>
        </div>
    }
}

export default FrontPage
