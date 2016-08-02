// @flow

import React from 'react'
import block from 'bem-cn'
import { easeOutQuint } from 'easing-utils'

import Splash from './splash'
import Content from './content'
import Header from './header'
import { scrollDiv } from '../util'

const b = block('front-page')

class FrontPage extends React.Component {
    view: React.DOM.div
    content: React.DOM.div
    header: Header
    handleResize: () => void

    constructor() {
        super()
        this.handleResize = () => this.header.forceUpdate()
    }

    componentDidMount(): void {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleResize)
    }

    scroll(): void {
        scrollDiv(this.view, this.content.offsetTop, 1.0, () => this.header.forceUpdate())
    }

    headerVisibility(): number {
        if(!this.view) return 0

        return this.view.scrollTop / this.view.offsetHeight
    }

    render() {
        return <div className={b}>
            <Header visibility={this.headerVisibility()} ref={ref => this.header = ref} />
            <div className={b('perspective')}
                 onScroll={() => this.forceUpdate()}
                 ref={ref => this.view = ref}>
                <Splash scroll={this.scroll.bind(this)} />
                <div className={b('content')} ref={ref => this.content = ref}>
                    <Content />
                </div>
            </div>
        </div>
    }
}

export default FrontPage
