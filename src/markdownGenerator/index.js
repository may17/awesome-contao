const generateMarkdownFile = require('./generateMarkdownFile')
const fs = require('fs').promises

async function generate () {
    const initialData = await require('../index.json')

    await Promise.all(initialData.categorys.map(async (itemPath, i) => {
        await generateMarkdownFile(itemPath, i)
    }))

    const concatMarkdownFiles = require('child_process').execSync('cat ' + __dirname + '/tmp/*.md').toString('UTF-8')
    await fs.writeFile(`../README.md`, concatMarkdownFiles);
    console.log('Done')
}

generate()