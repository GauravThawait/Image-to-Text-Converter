const T = require('tesseract.js')

T.recognize('./paragraph.jpeg', 'eng', {logger: e => console.log(e)})
    .then(out => console.log(out.data.text))