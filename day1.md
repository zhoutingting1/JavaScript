搭建前端开发环境作业 

一、  首先在自己电脑上安装Google Chrome 浏览器

​			到Google chrome 官网下载并安装 Chrome 浏览器。（注意下载最新的）

二、 安装JavaScript 运行时 -- Node 

1. 官网下载地址：[下载 | Node.js](https://nodejs.org/zh-cn/download)
2. Node.js默认安装目录为 *C:\Program Files\nodejs\*, 你也可以修改目录

记住，一路都是 next（下一步）

1. 最后install，等安装好
2. 在命令行里： node -v，看是否会出现一个版本号，出现了说明安装成功！
3. 最后还要检查一下**环境变量**是否配置：我的电脑（此电脑）右键，打开属性
4. ![点击高级系统设置](https://image-static.segmentfault.com/270/685/2706858956-595dd7b00b5af_articlex)
5. ![点击环境变量](https://image-static.segmentfault.com/330/053/3300535810-595dd8322eba9_articlex)
6. ![变量值加入node安装地址](https://image-static.segmentfault.com/198/357/198357956-595dd8541cad0_articlex)



6. 配置国内镜像源比较重要，一定要配置好。

三、 安装编辑器 -- Visual Studio Code 

1. 到 Visual Studio Code 官网https://code.visualstudio.com/下载并安装最新版本 Visual Studio Code
2. 安装插件 （推荐安装插件）
   1. 简体中文语言包（Chinese (Simplified) Language Pack for VS Code）
   2. 前端插件包（Frontend Extension Pack）（插件并非越多越好，有些插件已经过时了，有些插件对性能有严重影响。）

四、安装分布式版本控制工具 -- Git 

​		到 Git 官网（https://git-scm.com/downloads)下载并安装最		新版的 Git（安装过程中注意选择：用 Visual Studio Code为 Git 的默认编辑器）

1.配置个人信息（$ git config --global user.name "Your Name" $ git config --global user.email "email@example.com）

2.创建版本库（git init		ls -ha）

3..git目录

4.一些常用命令如下：

（git clone、git push、git add 、git commit、git checkout、git pull）



五、vscode和 git都下载好之后，配置git 为vscode的终端

打开vscode 的设置，如图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200509235131173.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjAxMzUw,size_16,color_FFFFFF,t_70#pic_center)
我的电脑为windows系统，所以步骤2为Windows,若电脑为Linux系统，要选择相应的Linux系统。
进入之后 如图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200510000849868.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjAxMzUw,size_16,color_FFFFFF,t_70#pic_center)
在双引号内写入git安装目录下的bin目录的bash位置
!(https://img-blog.csdnimg.cn/20200510001105769.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjAxMzUw,size_16,color_FFFFFF,t_70#pic_center)
填好之后，重启vscode，打开终端
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200510001316833.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjAxMzUw,size_16,color_FFFFFF,t_70#pic_center)

