import toml from 'toml'
import { parseQuery } from 'loader-utils'
import fs from 'fs'

module.exports = function(source) {
    const data = toml.parse(source)
    this.cacheable()

    const parsed = Object.keys(data).map(id => {
        const [date, tag] = id.split('_')

        const markdown = fs.readFileSync(`${__dirname}/${id}.md`, 'utf8')

        return {
            markdown: markdown,
            title: data[id].title,
            date: date,
            tag: tag,
        }
    }).reverse() // Assuming posts are added top down

    return `module.exports = ${JSON.stringify(parsed)}`
}
