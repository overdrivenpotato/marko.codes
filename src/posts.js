import moment from 'moment'

import raw from 'posts'

type RawPost = {
    markdown: string,
    title: string,
    date: string,
}

export class Post {
    markdown: string
    title: string
    date: Moment
    tag: ?string

    constructor({markdown, title, date, tag}: RawPost) {
        this.markdown = markdown
        this.title = title
        this.date = moment(date)
        this.tag = tag
    }

    key(): string {
        return this.date.format() + this.tag
    }
}

export default raw.map(r => new Post(r))
