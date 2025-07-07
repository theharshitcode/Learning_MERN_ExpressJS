import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';
// console.log(fs)
const basepath = 'C:\\Users\\lenovo\\Desktop\\js H.W';
let files = await fs.readdir(basepath);
// console.log(files);

for (const items of files) {
    let ext = items.split('.').slice(1).pop();
    console.log(ext);
    if(!fsn.existsSync(path.join(basepath, ext))) {
        await fs.mkdir(path.join(basepath, ext));
    }
    await fs.rename(path.join(basepath, items), path.join(basepath, ext, items));
    
    
    // console.log(items);
}


