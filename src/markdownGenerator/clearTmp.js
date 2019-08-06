const fs = require('fs')
const path = require('path')

module.exports = () => {
    const directory = __dirname + '/tmp'

    return new Promise((resolve, reject) => {
        fs.readdir(directory, (err, files) => {
            if (err) reject(err)
          
            for (const file of files) {
              const filePath = path.join(directory, file)
              if (filePath.endsWith('.md')) {
                  fs.unlink(path.join(directory, file), err => {
                      if (err) throw err
                    })
              }
            }

            resolve()
          })
    })
    
    
    
    
}

