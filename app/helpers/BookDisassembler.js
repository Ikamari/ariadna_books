const splitBookData = (lines, bookname) => {
    let text = '', title = 'Безымянная книга';

    // Get title of book
    if (lines[0].startsWith('Title: ')) {
        title = lines[0].substring(7)
    }

    // Get book's text
    const linesNum = lines.length - 1;
    for(let page = 3; page <= linesNum; page++) {
        if (page === 3) {
            text += lines[page].substr(3)
        } else if (page < linesNum) {
            text += lines[page].substr(2)
        } else {
            text += lines[page].substr(2, lines[page].length - 1)
        }
    }

    return {type: 0, name: bookname.substr(0, bookname.length - 4), title, text}
};

const BookDisassembler = (file) => (
    new Promise((resolve, reject) => {
        const fileReader = new FileReader;

        fileReader.onload = (e) => {
            const content = e.target.result;
            const lines = content.split('\n');

            resolve(splitBookData(lines, file.name))
        };

        fileReader.readAsText(file)
    })
);

export default BookDisassembler