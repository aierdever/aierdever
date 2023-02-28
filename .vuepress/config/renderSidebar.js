let fs = require('fs');
let path = require('path');

const basePath = path.resolve(__dirname, '../../');
const sourcePath = path.resolve(__dirname, '../../docs/')
const barFile = path.resolve(__dirname,'./sidebar.js');
/*
  "/docs/pcwork/css": [
    "/docs/pcwork/css/1.grid",
    "/docs/pcwork/css/2.common",
    "/docs/pcwork/css/3.icons"
  ],
  "/docs/pcwork/datagrid": [
    "/docs/pcwork/datagrid/1.newGrid",
    "/docs/pcwork/datagrid/2.gridMethod",
    "/docs/pcwork/datagrid/3.gridEdit"
  ],


 "/docs/pcwork/css": {
    text: 'css',
    children: [
    "/docs/pcwork/css/1.grid",
    "/docs/pcwork/css/2.common",
    "/docs/pcwork/css/3.icons"
    ]
 },
 "/docs/pcwork/datagrid":{
    text: 'datagrid',
    children: [
    "/docs/pcwork/datagrid/1.newGrid",
    "/docs/pcwork/datagrid/2.gridMethod",
    "/docs/pcwork/datagrid/3.gridEdit"
    ]
 }
*/ 


let renderFn = {
    booksList: ['/docs/pcwork','/docs/souni'],
    filesList : {},
    newFilesList: {},
    barData : {
        '/docs/pcwork':[],
        '/docs/souni':[],
    },
    navTxt : '',
    init (){
        let me = this;
        me.readFileList(sourcePath,me.filesList);//读取到基础列表
        me.renderListData();
        // Object.keys(me.filesList).forEach(k => {
        //     if(me.filesList[k].length == 1){
        //         delete me.filesList[k];
        //     }
        // });
        // console.log(JSON.stringify(me.filesList,'',2));
        me.renderSidebar();
    },
    renderListData(){
        var me = this;
        let kk = {}; //存放同组的url keys
        let newList = {}; //新的 {text,children} 格式的导航数据
        let kv = {};
        let kw = {};
        Object.keys(me.filesList).forEach(item => {
            Object.keys(me.barData).forEach( k => {
                if(!kk[k]){kk[k] = []}
                if(item.indexOf(k)>=0){
                    kk[k].push(item);
                }
            });
            const itemSplit = item.lastIndexOf('/');
            const itemN = item.slice(itemSplit+1);
            newList[item] = {
                // path: item,
                text: itemN,
                children: me.filesList[item]
            }
        });
        // console.log(kk);
        Object.keys(kk).forEach(k => {
            let item = kk[k];
            kv[k] = item.map(kitem => {
                return newList[kitem];
            });
        });
        Object.keys(kk).forEach(k => {
            let item = kk[k];
            item.forEach(kitem => {
                kw[kitem] = kv[k];
            }) 
        });
        me.newFilesList = kw;
        // console.log(kw);
    },
    renderSidebar(){
        var me = this;
        fs.writeFile(barFile,`export default ${JSON.stringify(me.newFilesList,'',2)}`, function(err){//写入 nav.md
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
            const fileItem = filePath+ '/' + fileName;

            // console.log(filePath, '==', fileItem);

            if(filesList[filePath]){
                // if(fileName == 'index.html'){
                //     filesList[filePath].unshift(fileName);
                // }else{
                    filesList[filePath].push(fileItem);
                // }
            }else{
                filesList[filePath] = [fileItem];
            }
          }
        });
        return filesList;
    },
}

//执行
renderFn.init();