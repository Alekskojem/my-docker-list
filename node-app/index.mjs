import fs from 'fs'
fs.appendFile('my-file.txt', 'File was created Node.js', (err) => {
    if (err) throw err
    console.log('File is saved!')
} )
setTimeout(() => console.log('Finish'), 20000)