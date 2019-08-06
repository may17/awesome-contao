const fs = require('fs').promises

module.exports = async () => {
    const concatMarkdownFiles = require('child_process').execSync('cat ' + __dirname + '/tmp/*.md').toString('UTF-8')
    await fs.writeFile(`../README.md`, concatMarkdownFiles);
    console.log('All files concated.')
}