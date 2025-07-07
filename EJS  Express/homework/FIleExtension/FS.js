const fs = require('fs');

// PDF ko read karna
fs.readFile('document.pdf', (err, data) => {
    if (err) {
        console.error('Error reading PDF:', err);
        return;
    }

    // PDF ko naye naam se save karna
    fs.writeFile('copy_document.pdf', data, (err) => {
        if (err) {
            console.error('Error writing PDF:', err);
        } else {
            console.log('PDF copied successfully!');
        }
    });
});
