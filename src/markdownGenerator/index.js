const generateMarkdownFile = require('./generateMarkdownFile')
const concatFiles = require('./concatFiles')
const clearTmp = require('./clearTmp')
const createToc = require('./createToc')

async function generate () {
    await clearTmp()
    
    const initialData = await require('../index.json')
    const categorys = initialData.categorys

    await Promise.all(categorys.map(async (itemPath, i) => {
        await generateMarkdownFile(itemPath, i)
    }))

    await createToc(categorys)

    await concatFiles()
}

generate()