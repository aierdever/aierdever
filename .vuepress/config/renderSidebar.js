let fs = require('fs');
let path = require('path');

const basePath = path.resolve(__dirname, '../../');
const sourcePath = path.resolve(__dirname, '../../docs/')
const barFile = path.resolve(__dirname,'./sidebar.js');

let renderFn = {
    filesList : {},
    barArr : [],
    navTxt : '',
    init (){
        let me = this;
        me.readFileList(sourcePath,me.filesList);//读取到基础列表
        Object.keys(me.filesList).forEach(k => {
            if(me.filesList[k].length == 1){
                delete me.filesList[k];
            }
        });
        // console.log(JSON.stringify(me.filesList,'',2));
        me.renderSidebar();
    },
    renderSidebar(){
        var me = this;
        fs.writeFile(barFile,`export default ${JSON.stringify(me.filesList,'',2)}`, function(err){//写入 nav.md
            if(err) {
                return console.log("写入导航失败", err);
            }
            console.log("写入导航成功");
        });
    },
    readFileList (dir, filesList = {}){
        let me = this;
        const files = fs.readdirSync(dir);
        files.forEach((item, index) => {
          let fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
              me.readFileList(fullPath, filesList); //递归读取文件
          } else if(item.endsWith('.md')){
            const fileFullPath = fullPath.replace(basePath,'').replace(/\\/ig,'/');
            const pathSplit = fileFullPath.lastIndexOf('/');
            const filePath = fileFullPath.slice(0,pathSplit);
            let fileName = item.replace('.md','');
            if(fileName == 'index' || fileName == 'readme'){
                fileName = 'index.html'
            }
            if(filesList[filePath]){
                if(fileName == 'index.html'){
                    filesList[filePath].unshift(fileName);
                }else{
                    filesList[filePath].push(fileName);
                }
                
            }else{
                filesList[filePath] = [fileName];
            }
          }
        });
        return filesList;
    },
}

//执行
renderFn.init();