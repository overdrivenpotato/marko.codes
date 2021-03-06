// @flow

import React from 'react'
import { easeOutQuint } from 'easing-utils'

const cancelEvents = ['mousedown', 'mousewheel', 'touchmove', 'keydown']

const bindEvent = (view: React.DOM.div, f: () => void): void => {
    cancelEvents.map(e => view.addEventListener(e, f))
}

const unbindEvent = (view: React.DOM.div, f: () => void): void => {
    cancelEvents.map(e => view.removeEventListener(e, f))
}

// Scroll a div element to a target offset over a given duration. Update
// function is called every frame
export const scrollDiv = (
    view: React.DOM.div,
    target: number,
    duration: number
): void => {
    const startTime = new Date().getTime()
    const startOffset = view.scrollTop
    let canceled = false

    const scroller = () => { canceled = true }

    const anim = () => {
        if(canceled) return

        const progress = (new Date().getTime() - startTime) / 1000.0 / duration

        if(progress > 1) {
            view.scrollTop = target
            unbindEvent(view, scroller)
        } else {
            window.requestAnimationFrame(anim)
            view.scrollTop = easeOutQuint(progress) * (target - startOffset) + startOffset
        }
    }

    bindEvent(view, scroller)
    anim()
}

export const clamp = (n: number, min: number, max: number): number => (
    Math.min(Math.max(n, min), max)
)
