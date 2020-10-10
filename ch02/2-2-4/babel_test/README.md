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
