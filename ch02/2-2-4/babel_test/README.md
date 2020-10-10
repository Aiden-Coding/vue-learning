Babel详情可以参照

官网https://babeljs.io
https://babeljs.cn(中文网)
现在分享一下Babel 在Mac 上安装和使用
首先mac 上要安装Node.JS 和 npm,如未安装可参照其他文章

1.创建一个package.json
```
npm init (回车, 一直下一步即可)
```
2-安装 Babel
```
npm install --save-dev babel-cli
测试是否安装成功
./node_modules/.bin/babel --help  查看帮助
```
3-安装ECMAScript6/2015 (ES6/ES2015)
```
npm install --save-dev babel-preset-latest
```
4-在项目根目录创建 .babelrc 配置文件
```
{
  "presets": ["latest"]
  //或者,二选一
  "presets": ["es2015"]
}
```
5-配置完成后, babel可以把我们es6的语法转换成es5的语法
新建一个main.js文件

在 main.js 内写入一下es6的代码
```
    var fn = (a,b) => a + b;
```
6-终端执行
```
./node_modules/.bin/babel main.js(编译的文件)
```
执行完成可以在终端看到转换后的代码
上面的流程使用babel来转换我们代码, 终端展示的效果
-----

下面的流程使用浏览器显示我们的es6的代码效果

从Babel 6.0开始, 不再直接提供浏览器版本, 而是要用构建工具构建出来. 如果你没有或不想使用构建工具, 可以通过安装5.x版本的babel-core 模块获取

1-安装
```
npm install babel-core@5
```
2-编写测试文件
```
在跟目录新建一个html文件, 比如 index.html 

引入 browser.js 和 browser-polyfill.js 两个文件, 这两个是必须引入的问题件
<script src="./node_modules/babel-core/browser.js" type="text/javascript"></script>
<script src="./node_modules/babel-core/browser-polyfill.js" type="text/javascript"></script>
```
3-另外引入我们编写的es6代码的js文件
```
注意: browser.js 是 Babel 提供的转换器脚本, 在引入我们编写的es6的文件时, script 标签的 type 需要是 "text/babel"

<script type="text/babel" src="./main.js"></script> 
```
4-开启一个浏览器服务, 在浏览器端显示效果
```
browser-sync start --server
在开启一个服务器时候你可能遇到以下两个问题
```
1.-bash: browser-sync: command not found
解决方案：

加载该模块
npm install -g browser-sync
参照链接:
https://stackoverflow.com/questions/35500178/browsersync-command-not-found-after-installing-browser-sync

2-运行index.html时候报错 Cross origin requests are only supported for protocol schemes: http, data,chrome-extension, https, chrome-extension-resource.
解决方案：

( 需要替换路径中的yourname )
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/yourname/MyChromeDevUserData/
参照链接:
http://www.cnblogs.com/mackxu/p/cross-domain.html)

