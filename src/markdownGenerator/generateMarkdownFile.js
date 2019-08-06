const fs = require('fs').promises
const njk = require('nunjucks')

module.exports = async (fileName, i) => {
    const specialIndex = (i >= 1)
        ? ++i
        : i
    
    const currentIndex = (i < 10)
        ? `0${specialIndex}`
        : `${specialIndex}`
    
    const fileData = require(`../content/${fileName}`)
    
    const data = { ...fileData }

    const template = fileData.template || 'template.md'
    
    njk.configure(__dirname + '/templates')
    const markdown = njk.render(template, data)
    
    const writeMarkdownFile = await fs.writeFile(`${__dirname}/tmp/${currentIndex}.md`, markdown);

    return writeMarkdownFile
}