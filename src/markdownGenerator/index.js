const generateMarkdownFile = require('./generateMarkdownFile')
const concatFiles = require('./concatFiles')
const clearTmp = require('./clearTmp')
const createToc = require('./createToc')

async function generate () {
    await clearTmp()
    
    const initialData = await require('../contents.json')
    const contents = initialData.contents

    await Promise.all(contents.map(async (itemPath, i) => {
        await generateMarkdownFile(itemPath, i)
    }))

    await createToc(contents)

    await concatFiles()
}

generate()