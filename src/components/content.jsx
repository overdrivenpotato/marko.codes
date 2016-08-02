// @flow

import React from 'react'
import ReactMarkdown from 'react-markdown'
import block from 'bem-cn'

import posts, { Post } from '../posts'

const b = block('content')

const renderPost = (post: Post) => (
    <div className={b('post')} key={post.key()}>
        <h1>{post.title}</h1>
        <h2>{post.date.format('ddd MMM Do, YYYY')}</h2>
        <ReactMarkdown source={post.markdown} />
    </div>
)

const Content = () => (
    <div className={b}>
        { posts.map(renderPost) }
    </div>
)

export default Content
