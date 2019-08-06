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
    
    njk.configure(__dirname)
    const markdown = njk.render('template.md', data)
    
    const writeMarkdownFile = await fs.writeFile(`${__dirname}/tmp/${currentIndex}.md`, markdown);

    return writeMarkdownFile
}