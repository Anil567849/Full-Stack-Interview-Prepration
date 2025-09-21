const path = require('path');

// const currDirectory = path.dirname('E:/Web Dev/Thapa/Node js tutorials/11_path_module/index.js');
// console.log(currDirectory);

// const extensionName = path.extname('E:/Web Dev/Thapa/Node js tutorials/11_path_module/index.js');\
// console.log(extensionName);

const allInfoAboutPath = path.parse  ('E:/Web Dev/Thapa/Node js tutorials/11_path_module/index.js');
console.log(allInfoAboutPath);
console.log(allInfoAboutPath.root);
console.log(allInfoAboutPath.dir);
console.log(allInfoAboutPath.name);