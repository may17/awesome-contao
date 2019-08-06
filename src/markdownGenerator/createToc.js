const fs = require('fs').promises
const njk = require('nunjucks')
var slugify = require('slugify')

module.exports = async (contents) => {
    const tocData = contents.map(fileName => {
        const fileData = require(`../content/${fileName}`)

        if (!(fileData.tocNoIndex)) {
            const title = fileData.title
            const link = '#' + slugify(title, {
                lower: true,
                remove: /[*+~.()'"!:@]/g
            })
            return {
                title,
                link,
                indent: fileData.tocIndent || 0
            }
        }
    })
    .filter(item => item !== undefined)

    njk.configure(__dirname + '/templates', {
        trimBlocks: true
    })

    const markdown = njk.render('toc.md', {
        entries: tocData
    })
    
    const writeMarkdownFile = await fs.writeFile(`${__dirname}/tmp/01.md`, markdown);

    return writeMarkdownFile
}