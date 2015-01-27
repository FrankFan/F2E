F2E
===

Not a huge project but some experimental snippet code for Front End practice

### 安装环境
1. node.js
2. npm
3. grunt-cli

`npm install -g grunt-cli --save-dev`

### package.json
`npm init`
根据terminal的对话初始化一个 `package.json` 模板文件, `npm install` 会安装这个文件中的grunt插件.


### Gruntfile.js
`touch Gruntfile.js`
新建一个空白的Gruntfile.js文件，写入代码：

```javascript
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
```
这个文件是用来配置task的.


### 运行grunt
在终端执行 `grunt`, 会调用 `uglify` task 压缩src目录下的F2E.js 文件到 build目录下 F2E.min.js


2014-11-19 00:23:49
