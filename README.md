# web_work_flow
方便用于代码测试
# 一. git 配置
git 配置
在本地和线上分别创建web_work_flow仓库
在本地： 
    git init 
    git add .
    git commit -m 'init'
    git remote add origin master   (添加远程仓库地址)
    git push -u origin master (会报错，因为在线上创建仓库的时候默认会创建一个readme.md文件,而本地的
    和线上的文件不一致会导致push失败, 第一次push的时候要加上 -u origin master,后面直接git push即可)
    问题解决：
        git pull --rebase origin master
        git push origin master
# 二. webpack配置
1. 安装webpack、webpack-cli
2. 创建webpack.config.js
3. 入口(entry) 默认值是 ./src/index.js
