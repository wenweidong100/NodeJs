配置Webpack现在开始配置webpack，目标是把这两个js文件合并成一个文件.
我们可以自己在build文件夹里面手动建一个index.html文件夹，
然后再把合并以后的js引用在里面，但是这样有些麻烦，所以我们这里安装一个plugin，
可以自动快速的帮我们生成HTML。npm install html-webpack-plugin --save-dev