const fs = require('fs').promises
const njk = require('nunjucks')

module.exports = async (fileName, i) => {
    const fileData = require(`../content/${fileName}`)
    
    const data = { ...fileData }
    
    njk.configure(__dirname)
    const markdown = njk.render('template.md', data)
    
    const writeMarkdownFile =  await fs.writeFile(`${__dirname}/tmp/${i}.md`, markdown);

    return writeMarkdownFile
}